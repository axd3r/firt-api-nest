import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, Min } from 'class-validator';

export class AddProductToOrderDTO {
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
