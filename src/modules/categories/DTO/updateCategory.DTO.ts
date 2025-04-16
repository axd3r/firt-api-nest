import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoryDTO } from "./createCategory.DTO";

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}