import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class AddProductToOrderDTO {
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
