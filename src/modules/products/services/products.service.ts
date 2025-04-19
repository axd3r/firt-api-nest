import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from 'src/modules/products/DTO/createProducts.DTO'; 
import { UpdateProductDTO } from 'src/modules/products/DTO/updateProducts.DTO'; 
import { Product } from 'src/modules/products/entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { FilterProductsDTO } from '../DTO/filterProducts.DTO';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) {}

    findAll(params?: FilterProductsDTO) {
        if(params){
            const filters: FilterQuery<Product>= {};
            const {limit, offset} = params;
            const {minPrice, maxPrice} = params;
            if (minPrice && maxPrice) {
                filters.price = { $gte: minPrice, $lte: maxPrice };
            }
            return this.productModel.find(filters).skip(offset).limit(limit).exec()
        }
        return this.productModel.find().exec();
    }

    async findOne(id: string) {
        const products =  await this.productModel.findById(id).exec();
        if(!products) {
            throw new NotFoundException(`${id} not found`);
        }
        return products;
    }

    async create(productBody: CreateProductDTO) {
        const product = await this.productModel.create(productBody);
        return product;
    }
/*  Update, para empezar, guardado de datos en memoria
    update(id: number, productBody: UpdateProductDTO) {
        const product = this.findOne(numericId);
        if(!product) {
            return null;
        }
        const index = this.products.findIndex((item) => item.id === numericId);
        if(index === -1){
            throw new Error('Product not found');
        }
        this.products[index] = {
            ...product,
            ...productBody
        };
        return this.products[index];
    } */
    async update(id: string, productBody: UpdateProductDTO) {
        const product = await this.productModel.findByIdAndUpdate(id, productBody,{ new: true });
        if(!product) {
            throw new NotFoundException(`Product #${id} not found`);
        } 
        return product;
    }

/*  Delete, para empezar, eliminado en memoria
    delete(id: number) {
        const numericId = Number(id);
        const productIndex = this.products.findIndex(product => product.id === numericId);

        if (productIndex === -1) {
            throw new Error('Product not found');
        }

        this.products.splice(productIndex, 1);
    } */
   async delete(id: string) {
        return await this.productModel.findByIdAndDelete(id);
   }
}
