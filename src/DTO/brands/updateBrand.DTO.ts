import { PartialType } from "@nestjs/mapped-types";
import { CreateBrandDTO } from "./createBrand.DTO";

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}