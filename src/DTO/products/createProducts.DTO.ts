import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

    @IsBoolean()
    @IsOptional()
    readonly isActive?: boolean;
}