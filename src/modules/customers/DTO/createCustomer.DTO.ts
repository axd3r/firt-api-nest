import { IsString, IsNotEmpty, IsOptional, IsInt, Min, Max, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class CreateCustomerDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty()
  @IsInt()
  @Min(10000000)
  @Max(99999999)
  readonly DNI: number;

  @ApiProperty()
  @IsInt()
  @Min(100000000)
  @Max(999999999)
  readonly phone: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsDateString()
  birthDate?: string | number;
}
