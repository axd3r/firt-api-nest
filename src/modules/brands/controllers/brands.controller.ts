import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBrandDTO } from '../DTO/createBrand.DTO'; 
import { UpdateBrandDTO } from '../DTO/updateBrand.DTO'; 
import { BrandsService } from 'src/modules/brands/services/brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandService: BrandsService) { }

    @Get('/')
    getBrands() {
        return this.brandService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string) {
        return this.brandService.findOne(id);
    }

    @Post('/save')
    create(@Body() brandBody: CreateBrandDTO) {
        return this.brandService.create(brandBody);
    }

    @Put('/update/:id')
    update(@Param('id') id: string, @Body() body: UpdateBrandDTO) {
        return this.brandService.update(id, body)
    }

    @Delete('/delete/:id')
    remove(@Param('id') id: string) {
        return this.brandService.delete(id)
    }
}
