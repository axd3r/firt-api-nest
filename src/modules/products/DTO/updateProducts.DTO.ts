import {PartialType} from '@nestjs/mapped-types'
import { CreateProductDTO } from './createProducts.DTO';

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}