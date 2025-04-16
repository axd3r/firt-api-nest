import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from 'src/modules/products/DTO/createProducts.DTO'; 
import { UpdateProductDTO } from 'src/modules/products/DTO/updateProducts.DTO'; 
import { Product } from 'src/modules/products/entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1
    private products: Product[] = [{
        id: 1,
        name: 'Producto 1',
        description: 'bla bla bla',
        price: 322,
        stock: 3,
        image: 'defaul.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
    }];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }

    create(productBody: CreateProductDTO) {
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...productBody,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, productBody: UpdateProductDTO) {
        const numericId = Number(id);
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

    }

    delete(id: number) {
        const numericId = Number(id);
        const productIndex = this.products.findIndex(product => product.id === numericId);

        if (productIndex === -1) {
            throw new Error('Product not found');
        }

        this.products.splice(productIndex, 1);
    }
}
