import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class AddProductToOrderDTO {
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
