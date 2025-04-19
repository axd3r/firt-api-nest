import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/modules/products/services/products.service';
import { CreateProductDTO } from '../DTO/createProducts.DTO';
import { UpdateProductDTO } from '../DTO/updateProducts.DTO';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { FilterProductsDTO } from '../DTO/filterProducts.DTO';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get('filter')
  getProductsFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProducts(@Param('productId', MongoIdPipe) productId: string) {
    //return `product ${productId}`;
    return this.productsService.findOne(productId)
  }


  @Get('/')

  /* ----- 1era forma de llamar parametros por @Query -----
    getProduct(@Query() params: any) {
    const {limit, offset} = params
    return `products: limit => ${limit} offset =>  ${offset}`;
  } */
  /* ----- 2da forma de llamar parametro por @Query -----*/
  getProduct(
  @Query() params: FilterProductsDTO,) {
    //return `products: limit => ${limit} offset =>  ${offset} brand => ${brand}`;
    return this.productsService.findAll(params);
  }

  @Post('/save')
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() productBody: CreateProductDTO) {
    return this.productsService.create(productBody);
  }
  /* create(@Res() response: Response, @Body() productBody: any){
    response.status(200).send({
      status: 'success',
      message: 'accion de crear',
      productBody
    }) */

  @Put('/update/:id')
  update(@Param('id', MongoIdPipe) id: string, @Body() productBody: UpdateProductDTO) {
    return this.productsService.update(id, productBody);
  }

  @Delete('/delete/:id')
  remove(@Param('id', MongoIdPipe) id: string) {
    this.productsService.delete(id);

    return {
      status: 'Success',
      message: 'Registro elminado con exito'
    }
  }
}
