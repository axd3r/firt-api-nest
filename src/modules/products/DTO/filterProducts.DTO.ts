import { PartialType } from "@nestjs/swagger";
import { CreateProductDTO } from "./createProducts.DTO";
import { IsOptional, IsPositive, Min, ValidateIf } from "class-validator";

export class FilterProductsDTO extends PartialType(CreateProductDTO) {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    @Min(0)
    offset: number;

    @IsOptional()
    @Min(0)
    minPrice: number;

    @ValidateIf((params) => params.minPrice)
    @IsPositive()
    maxPrice: number;
}