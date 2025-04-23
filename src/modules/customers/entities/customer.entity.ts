import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/entities/users.entity';

@Schema({ timestamps: {
  currentTime: () => Date.now()
} })
export class Customer extends Document {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, unique: true })
  user: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  DNI: number;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  address: string;

  @Prop({ type: Number })
  birthDate?: number;
  
  @Prop({ type: Number, default: () => Date.now() })
  createdAt: number;

  @Prop({ type: Number, default: () => Date.now() })
  updatedAt: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
