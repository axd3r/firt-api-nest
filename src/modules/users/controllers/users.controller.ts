import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDTO } from '../DTO/createUser.DTO';
import { UpdateUserDTO } from '../DTO/updateUser.DTO';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.findAll();
  }

  @Post('/save')
  async create(@Body() createUserDTO: CreateUserDTO) {
    return await this.usersService.create(createUserDTO);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    return await this.usersService.update(id, updateUserDTO);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
