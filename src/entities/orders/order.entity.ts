import { OrderItem } from "./ordersItems/orderItem.entity";

export class Order {
    id: number;
    customerId: number;
    products: OrderItem[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
    status: 'pending' | 'paid' | 'shipped' | 'cancelled';
  }
  