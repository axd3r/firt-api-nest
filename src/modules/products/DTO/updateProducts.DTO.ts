import {PartialType} from '@nestjs/swagger'
import { CreateProductDTO } from './createProducts.DTO';

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}