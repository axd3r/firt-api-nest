import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDTO } from 'src/modules/brands/DTO/createBrand.DTO'; 
import { UpdateBrandDTO } from 'src/modules/brands/DTO/updateBrand.DTO'; 
import { Brand } from 'src/modules/brands/entities/brand.entity';

@Injectable()
export class BrandsService {
    constructor(
        @InjectModel(Brand.name) private brandModel: Model<Brand>
    ){}

    findAll() {
        return this.brandModel.find().exec();
    }

    async findOne(id: string) {
        const brand = await this.brandModel.findById(id);
        if(!brand) {
            throw new NotFoundException(`${id} not found`);
        }
        return brand;
    }

    async create(brandBody: CreateBrandDTO) {
        const brand = await this.brandModel.create(brandBody);
        return brand;
    }

    async update(id: string, brandBody: UpdateBrandDTO) {
        const brand = await this.brandModel.findByIdAndUpdate(id, brandBody, {new: true});
        if(!brand){
            throw new NotFoundException(`Brand ${id} not found`);
        }
        return brand;
    }

    async delete(id: string) {
        const brand = await this.findOne(id);
        if(!brand){
            throw new NotFoundException(`Brand ${id} not found`);
        }
        await brand.deleteOne();
        return {
            status: "success",
            message: "Registro eliminado con exito"
        }
    }
}
    