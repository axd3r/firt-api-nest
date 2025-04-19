import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDTO } from "./createCategory.DTO";

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}