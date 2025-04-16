import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    getCustomers(): string {
        return `Controlador de customers`
    }

    @Post('/save')
    create(@Body() customerBody: any) {
        return {
            status: 'Success',
            mesage: 'Customer creado correctamente',
            customerBody
        }
    }
}
