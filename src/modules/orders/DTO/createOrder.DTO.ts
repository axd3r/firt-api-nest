import { IsMongoId, IsArray, ValidateNested, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDTO } from './ordersItems/createOrderItem.DTO';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
  @ApiProperty({ type: String })
  @IsMongoId()
  readonly customer: string;

  @ApiProperty({ type: [CreateOrderItemDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDTO)
  readonly products: CreateOrderItemDTO[];

  @ApiProperty({ enum: ['pending', 'paid', 'shipped', 'cancelled'] })
  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  readonly status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}
