import { IsOptional, IsEnum } from 'class-validator';

export class UpdateOrderDTO {
  @IsOptional()
  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  readonly status?: 'pending' | 'paid' | 'shipped' | 'cancelled';
}
