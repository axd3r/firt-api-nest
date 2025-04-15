import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from '../DTO/products/createProducts.DTO';
import { UpdateProductDTO } from '../DTO/products/updateProducts.DTO'
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1
    private products: Product[] = [{
        id: 1,
        name: 'Producto 1',
        description: 'bla bla bla',
        price: 322,
        stock: 3,
        image: 'defaul.png'
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
        }
        this.products.push(newProduct);
        return newProduct
    }

    update(id: number, productBody: UpdateProductDTO) {
        const numericId = Number(id);
        const product = this.findOne(numericId);
        if(!product) {
            return null;
        }

        const index = this.products.findIndex((item) => item.id === numericId);
        this.products[index] = {
            ...product,
            ...productBody
        };
        return this.products[index];

    }
}
