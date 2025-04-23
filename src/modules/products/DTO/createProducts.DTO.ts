import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDTO } from "src/modules/categories/DTO/createCategory.DTO";

export class CreateProductDTO {
    //  @ApiProperty({ example: 'Guitarra eléctrica', description: 'Nombre del producto' })
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;

    @ApiProperty()
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    readonly isActive?: boolean;

    @ApiProperty()
    @ValidateNested()
    @IsNotEmpty()
    readonly category: CreateCategoryDTO;

    @IsMongoId()
    readonly brand: string;
}