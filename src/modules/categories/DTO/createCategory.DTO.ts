import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty()
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}