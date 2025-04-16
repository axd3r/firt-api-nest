import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { OrdersService } from 'src/services/orders/orders.service';
import { CreateOrderDTO } from 'src/DTO/orders/createOrder.DTO';
import { UpdateOrderDTO } from 'src/DTO/orders/updateOrder.DTO';
import { AddProductToOrderDTO } from 'src/DTO/orders/addProductToOrder.DTO';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post('/save')
  create(@Body() body: CreateOrderDTO) {
    return this.ordersService.create(body);
  }

  @Put('/update/:id')
  update(@Param('id') id: number, @Body() body: UpdateOrderDTO) {
    return this.ordersService.update(id, body);
  }

  @Post('/add-product/:id')
  addProduct(@Param('id') id: number, @Body() body: AddProductToOrderDTO) {
    return this.ordersService.addProduct(id, body);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    this.ordersService.delete(id);
    return {
        status: 'success',
        message: 'Registro eliminado correctamente',
      }
  }
}
