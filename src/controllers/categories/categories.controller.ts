import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateCategoryDTO } from 'src/DTO/categories/updateCategory.DTO';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) { }

  @Get(':categoryId/products/:productId')
  getCategory(@Param('productId') productId: string,
    @Param('categoryId') categoryId: string
  ) {
    return `product ${productId} and ${categoryId}`;
  }

  @Get('/')
  findAll() {
    const category = this.categoryService.findAll();
    return {
      status: 'Success',
      category
    }
  }

  @Get(':id') 
  findOne(@Param('id') id: number) {
    const category = this.categoryService.findOne(id);
    return {
      status: 'Success',
      message: 'Datos encontrados con exito',
      category
    }
  }
  

  @Post('/save')
  create(@Body() categoryBody: any) {
    const category = this.categoryService.create(categoryBody);
    return {
      status: 'Success',
      message: 'Categoria creada correcatmente',
      category
    }
  }

  @Put('/update/:id')
  update(@Param('id') id: number, @Body() categoryBody: UpdateCategoryDTO) {
    const category = this.categoryService.update(id, categoryBody);
    return {
      status: 'Success',
      message: 'Registro actualizado correctamente',
      category
    }
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    this.categoryService.delete(id);
    return {
      status: 'Success',
      message: 'Registro eliminado correctamente'
    }
  }
}
