import { IsNotEmpty, IsNumber, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDTO {
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @IsNumber()
  @Min(1)
  readonly quantity: number;

  @IsNumber()
  @Min(0)
  readonly price: number;
}
