import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDTO } from '../DTO/createCategory.DTO'; 
import { UpdateCategoryDTO } from '../DTO/updateCategory.DTO'; 
import Category from 'src/modules/categories/entities/category.entity';

@Injectable()
export class CategoriesService {
    private counterId = 1;
    private categories: Category[] = [{
        id: 1,
        name: 'Categoria 1',
        description: 'categoria 1',
        createdAt: new Date(),
        updatedAt: new Date(),
    }];

    findAll() {
        return this.categories;
    }

    findOne(id: number) {
        const numericId = Number(id);
        return this.categories.find((item) => item.id === numericId);
    }

    create(categoryBody: CreateCategoryDTO) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...categoryBody,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        this.categories.push(newCategory);
        return newCategory;
    }

    update(id: number, categoryBody: UpdateCategoryDTO) {
        const numericId = Number(id);
        const category = this.findOne(numericId);
        if(!category) {
            throw new NotFoundException('Category not found');
        }
        const index = this.categories.findIndex((item) => item.id === numericId);
        if(index === -1) {
            throw new Error('Category not found');
        }
        this.categories[index] = {
            ...category,
            ...categoryBody
        }
        return this.categories[index];
    }

    delete(id: number) {
        const numberId = Number(id);
        const index = this.categories.findIndex((category) => category.id === numberId);
        if (index === -1) {
            throw new NotFoundException('category not found');
        }
        this.categories.splice(index, 1);
    }
}
