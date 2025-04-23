import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateCategoryDTO } from '../DTO/updateCategory.DTO'; 
import { CategoriesService } from '../services/categories.service'; 
import { CreateCategoryDTO } from '../DTO/createCategory.DTO';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) { }

  @Get(':categoryId/products/:productId')
  getCategory(@Param('productId') productId: string,
    @Param('categoryId') categoryId: string
  ) {
    return `product ${productId} and ${categoryId}`;
  }

  @Get('/')
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('/:id') 
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }
  

  @Post('/save')
  create(@Body() categoryBody: CreateCategoryDTO) {
    return this.categoryService.create(categoryBody);
  }

  @Put('/update/:id')
  update(@Param('id') id: string, @Body() categoryBody: UpdateCategoryDTO) {
    return this.categoryService.update(id, categoryBody);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
