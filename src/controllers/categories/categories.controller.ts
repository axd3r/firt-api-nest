import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':categoryId/products/:productId')
      getCategory(@Param('productId') productId: string,
                  @Param('categoryId') categoryId: string
                ) {
        return `product ${productId} and ${categoryId}`;
      }

    @Post('/save')
    create(@Body() categoryBody: any) {
      return {
        status: 'Success',
        message: 'Categoria creada correcatmente',
        categoryBody
      }
    }
}
