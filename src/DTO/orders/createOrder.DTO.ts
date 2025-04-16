import { IsNotEmpty, IsNumber, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDTO } from './ordersItems/createOrderItem.DTO';

export class CreateOrderDTO {
    @IsNumber()
    @IsNotEmpty()
    readonly customerId: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDTO)
    readonly products: CreateOrderItemDTO[];
  }
  