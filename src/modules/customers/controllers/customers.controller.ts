import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDTO } from '../DTO/createCustomer.DTO';
import { UpdateCustomerDTO } from '../DTO/updateCustomer.DTO';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // Obtener todos los clientes
  @Get()
  async getCustomers() {
    return await this.customersService.findAll();
  }

  // Crear un nuevo cliente
  @Post('/save')
  async create(@Body() createCustomerDTO: CreateCustomerDTO) {
    return await this.customersService.create(createCustomerDTO);
  }

  // Obtener un cliente por su ID
  @Get(':id')
  async getCustomerById(@Param('id') id: string) {
    return await this.customersService.findOne(id);
  }

  // Actualizar los datos de un cliente
  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateCustomerDTO: UpdateCustomerDTO) {
    return await this.customersService.update(id, updateCustomerDTO);
  }

  // Eliminar un cliente
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.customersService.remove(id);
  }
}
