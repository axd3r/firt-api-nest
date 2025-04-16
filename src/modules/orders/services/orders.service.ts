import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/modules/orders/entities/order.entity';
import { OrderItem } from 'src/modules/orders/entities/ordersItems/orderItem.entity';
import { CreateOrderDTO } from '../DTO/createOrder.DTO'; 
import { UpdateOrderDTO } from '../DTO/updateOrder.DTO'; 
import { AddProductToOrderDTO } from '../DTO/addProductToOrder.DTO'; 

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      customerId: 101,
      products: [
        {
          productId: 1,
          quantity: 2,
          price: 150,
        },
        {
          productId: 3,
          quantity: 1,
          price: 250,
        },
      ],
      total: 150 * 2 + 250,
      createdAt: new Date('2025-04-01T10:00:00Z'),
      updatedAt: new Date('2025-04-01T10:00:00Z'),
      status: 'pending',
    },
  ];

  create(data: CreateOrderDTO): Order {
    this.counterId = this.counterId + 1;
    const total = data.products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const newOrder: Order = {
      id: this.counterId,
      customerId: data.customerId,
      products: data.products,
      total,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'pending',
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number) {
    const numericId = Number(id);
    const order = this.orders.find((item) => item.id === numericId);
    console.log(order);
    
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  update(id: number, changes: UpdateOrderDTO): Order {
    const order = this.findOne(id);

    if (changes.status) {
      order.status = changes.status;
    }

    order.updatedAt = new Date();
    return order;
  }

  addProduct(id: number, data: AddProductToOrderDTO): Order {
    const numberId = Number(id);
    const order = this.findOne(numberId);

    const item: OrderItem = {
      productId: data.productId,
      quantity: data.quantity,
      price: data.price,
    };

    order.products.push(item);
    order.total += item.price * item.quantity;
    order.updatedAt = new Date();

    return order;
  }

  delete(id: number): void {
    const numberId = Number(id);
    const index = this.orders.findIndex((order) => order.id === numberId);
    if (index === -1) {
      throw new NotFoundException('Order not found');
    }
    this.orders.splice(index, 1);
  }
}
