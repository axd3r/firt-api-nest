import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { OrderItem, OrderItemSchema } from './entities/ordersItems/orderItem.entity';
import { ProductsModule } from '../products/products.module';
import { Product, ProductSchema } from '../products/entities/product.entity';

@Module({
    imports: [MongooseModule.forFeature([
        { 
            name: Order.name, 
            schema: OrderSchema 
        },
        { 
            name: OrderItem.name, 
            schema: OrderItemSchema
        },
        {
            name: Product.name,
            schema: ProductSchema
        }
    ]),
],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}
