import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBrandDTO } from 'src/DTO/brands/createBrand.DTO';
import { UpdateBrandDTO } from 'src/DTO/brands/updateBrand.DTO';
import { BrandsService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandService: BrandsService) { }

    @Get('/')
    getBrands() {
        return this.brandService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.brandService.findOne(id);
    }

    @Post('/save')
    create(@Body() brandBody: CreateBrandDTO) {
        return this.brandService.create(brandBody);
    }

    @Put('/update/:id')
    update(@Param('id') id: number, @Body() body: UpdateBrandDTO) {
        return this.brandService.update(id, body)
    }

    @Delete('/delete/:id')
    remove(@Param('id') id: number) {
        this.brandService.delete(id)
        return {
            status: 'Success',
            message: 'Registro eliminado con exito'
        }
    }
}
