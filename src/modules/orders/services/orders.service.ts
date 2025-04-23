import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order } from '../entities/order.entity';
import { CreateOrderDTO } from '../DTO/createOrder.DTO';
import { UpdateOrderDTO } from '../DTO/updateOrder.DTO';
import { AddProductToOrderDTO } from '../DTO/addProductToOrder.DTO';
import { OrderItem } from '../entities/ordersItems/orderItem.entity';
import { Product } from 'src/modules/products/entities/product.entity';

@Injectable()
export class OrdersService {
  private async calculateTotal(productIds: Types.ObjectId[]): Promise<number> {
    const items = await this.orderItemModel.find({ _id: { $in: productIds } });
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    @InjectModel(OrderItem.name) private readonly orderItemModel: Model<OrderItem>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,

  ) { }

  async create(data: CreateOrderDTO) {
    const items = await Promise.all(
      data.products.map(async (item) => {
        const newItem = new this.orderItemModel(item);
        return await newItem.save();
      }),
    );

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const newOrder = new this.orderModel({
      customer: data.customer,
      products: items.map((i) => i._id),
      total,
      status: data.status || 'pending',
    });

    return await newOrder.save();
  }


  async findAll() {
    return this.orderModel.find().populate('customer', '_id name DNI phone').select('-__v').exec();
  }

  async findOne(id: string) {
    const order = await this.orderModel.findById(id)
                        .populate('customer', '-user -birthDate -createdAt -updatedAt -__v')
                        .populate({
                          path: 'products', select: 'product quantity price',
                          populate: {
                            path: 'product',
                            model: 'Product',
                            select: 'name'
                          }
                        }).select('-__v')
                        .exec();
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }

  async update(id: string, changes: UpdateOrderDTO) {
    const order = await this.orderModel.findByIdAndUpdate(
      id,
      { ...changes },
      { new: true },
    );
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }

  async addProduct(id: string, data: AddProductToOrderDTO){
    const order = await this.findOne(id);

    const product = await this.productModel.findById(data.product);
    if (!product) {
      throw new NotFoundException(`Product with id ${data.product} not found`);
    }

    const newItem = new this.orderItemModel({
      product: data.product,
      quantity: data.quantity,
      price: product.price,
    });
    const savedItem = await newItem.save();

    const itemId = (savedItem.toObject() as { _id: Types.ObjectId })._id;
    order.products.push(itemId);

    order.total = await this.calculateTotal(order.products);

    return await order.save();
  }



  async delete(id: string) {
    const result = await this.orderModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return {
      status: "success",
      message: "Registro eliminado con exito"
    }
  }
}
