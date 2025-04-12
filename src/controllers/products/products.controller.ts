import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    
  @Get('filter')
  getProductsFilter() {
    return `yo soy un filter`;
  }
  
  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return `product ${productId}`;
  }


  @Get('/')
  
  /* ----- 1era forma de llamar parametros por @Query -----
    getProduct(@Query() params: any) {
    const {limit, offset} = params
    return `products: limit => ${limit} offset =>  ${offset}`;
  } */
 /* ----- 2da forma de llamar parametro por @Query -----*/
  getProduct(
    @Query('limit') limit = 100, 
    @Query('ofset') offset = 0, 
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset =>  ${offset} brand => ${brand}`;
  }

  @Post('/save')
  create(@Body() productBody: any){
    return {
      status: 'success',
      message: 'accion de crear',
      productBody
    }
  }
}
