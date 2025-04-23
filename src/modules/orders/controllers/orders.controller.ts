import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { OrdersService } from '../services/orders.service'; 
import { CreateOrderDTO } from '../DTO/createOrder.DTO';
import { UpdateOrderDTO } from '../DTO/updateOrder.DTO';
import { AddProductToOrderDTO } from '../DTO/addProductToOrder.DTO';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Post('/save')
  create(@Body() body: CreateOrderDTO) {
    return this.ordersService.create(body);
  }

  @Put('/update/:id')
  update(@Param('id', MongoIdPipe) id: string, @Body() body: UpdateOrderDTO) {
    return this.ordersService.update(id, body);
  }

  @Post('/add-product/:id')
  addProduct(@Param('id', MongoIdPipe) id: string, @Body() body: AddProductToOrderDTO) {
    return this.ordersService.addProduct(id, body);
  }

  @Delete('/delete/:id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.delete(id);
  }
}
