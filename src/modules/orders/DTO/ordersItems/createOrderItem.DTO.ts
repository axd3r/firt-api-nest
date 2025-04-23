import { IsMongoId, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDTO {
  @ApiProperty({ type: String })
  @IsMongoId()
  readonly product: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  readonly quantity: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  readonly price: number;
}
