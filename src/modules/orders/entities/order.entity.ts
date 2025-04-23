import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from 'src/modules/customers/entities/customer.entity';
import { OrderItem } from './ordersItems/orderItem.entity';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Types.ObjectId | Customer;

  @Prop({ type: [{ type: Types.ObjectId, ref: OrderItem.name }], required: true })
  products: Types.ObjectId[];

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({
    type: String,
    enum: ['pending', 'paid', 'shipped', 'cancelled'],
    default: 'pending',
  })
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}

export const OrderSchema = SchemaFactory.createForClass(Order);
