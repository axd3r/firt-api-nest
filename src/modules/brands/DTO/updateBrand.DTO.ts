import {PartialType} from '@nestjs/swagger'
import { CreateBrandDTO } from "./createBrand.DTO";

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}