import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDTO } from '../DTO/createCategory.DTO'; 
import { UpdateCategoryDTO } from '../DTO/updateCategory.DTO'; 
import { Category } from 'src/modules/categories/entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>
    ){}
    findAll() {
        return this.categoryModel.find().exec();
    }

    async findOne(id: string) {
        const category = await this.categoryModel.findById(id);
        if(!category){
            throw new NotFoundException(`${id} not found`);
        }
        return category;
    }

    async create(categoryBody: CreateCategoryDTO) {
        const category = await this.categoryModel.create(categoryBody);
        return category
    }

    async update(id: string, categoryBody: UpdateCategoryDTO) {
        const category = await this.categoryModel.findByIdAndUpdate(id, categoryBody, {new: true});
        if(!category){
            throw new NotFoundException(`${id} not found`);
        }
        return category;
    }

    async delete(id: string) {
        const category = await this.findOne(id);
        if(!category){
            throw new NotFoundException(`${id} not found`);
        }
        await category.deleteOne();
        return {
            status: "success",
            message: "Registro eliminado con exito"
        }
    }
}
