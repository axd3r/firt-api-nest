import { IsNotEmpty, IsNumber, IsArray, ValidateNested, Min, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDTO } from './ordersItems/createOrderItem.DTO';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly customerId: number;
  
    @ApiProperty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDTO)
    readonly products: CreateOrderItemDTO[];

    @ApiProperty()
    @IsString()
    readonly status: 'pending' | 'paid' | 'shipped' | 'cancelled';
  }
  