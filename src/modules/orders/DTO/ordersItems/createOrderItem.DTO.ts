import { IsNotEmpty, IsNumber, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  readonly quantity: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  readonly price: number;
}
