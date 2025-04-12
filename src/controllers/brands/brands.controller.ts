import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    getBrands() : string {
        return `Controlador de Brands`;
    }

    @Post('/save')
    create(@Body() brandBody: any) {
        return {
            status: 'Success',
            message: 'accion de brands',
            brandBody
        }
    }
}
