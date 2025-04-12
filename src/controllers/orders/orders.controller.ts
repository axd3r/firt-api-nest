import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getOrders(): string {
        return `Controlador de orders`
    }

    @Post('/save')
    create(@Body() orderBody: any) {
        return {
            status: 'Success',
            message: 'Order creado correctaemnte',
            orderBody
        }
    }
}
