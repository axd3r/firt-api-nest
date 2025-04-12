import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndPoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con/sas/';
  }

/* 
  @Get('/products/filter')
  getProductsFilter() {
    return `yo soy un filter`;
  }
  
  @Get('/products/:productId')
  getProducts(@Param('productId') productId: string) {
    return `product ${productId}`;
  }


  @Get('/products')
  
  /* ----- 1era forma de llamar parametros por @Query -----
    getProduct(@Query() params: any) {
    const {limit, offset} = params
    return `products: limit => ${limit} offset =>  ${offset}`;
  } 
 /* ----- 2da forma de llamar parametro por @Query -----
  getProduct(
    @Query('limit') limit = 100, 
    @Query('ofset') offset = 0, 
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset =>  ${offset} brand => ${brand}`;
  } */

  /* @Get('/categories/:categoryId/products/:productId')
  getCategory(@Param('productId') productId: string,
              @Param('categoryId') categoryId: string
            ) {
    return `product ${productId} and ${categoryId}`;
  } */
}
