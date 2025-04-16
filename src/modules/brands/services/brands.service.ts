import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateBrandDTO } from 'src/modules/brands/DTO/createBrand.DTO'; 
import { UpdateBrandDTO } from 'src/modules/brands/DTO/updateBrand.DTO'; 
import { Brand } from 'src/modules/brands/entities/brand.entity';

@Injectable()
export class BrandsService {
    private counterId = 1;
    private brands: Brand[] = [{
        id: 1,
        name: 'Brand 1',
        description: 'Primer Brand',
    }];

    findAll() {
        return this.brands;
    }

    findOne(id: number) {
        const numericId = Number(id);
        return this.brands.find((item) => item.id === numericId);
    }

    create(brandBody: CreateBrandDTO) {
        this.counterId = this.counterId + 1;
        const newBrand = {
            id: this.counterId,
            ...brandBody,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    }

    update(id: number, brandBody: UpdateBrandDTO) {
        const numericId = Number(id);
        const brand = this.findOne(numericId);
        if(!brand) {
            throw new NotFoundException('Brand not found');
        }
        const index = this.brands.findIndex((item) => item.id === numericId);
        if(index === -1) {
            throw new Error('Brand not found');
        }
        this.brands[index] = {
            ...brand,
            ...brandBody
        }
        return this.brands[index];
    }

    delete(id: number) {
        const numberId = Number(id);
        const index = this.brands.findIndex((brand) => brand.id === numberId);
        if(index === -1) {
            throw new NotFoundException('Brand not found');
        }
        this.brands.splice(index, 1);
    }
}
    