import { PartialType } from '@nestjs/swagger';
import { CreateOrderDTO } from './createOrder.DTO';

export class UpdateOrderDTO extends PartialType(CreateOrderDTO){}

