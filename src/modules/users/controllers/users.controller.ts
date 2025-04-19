import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private userServices: UsersService){}
    @Get()
    getUsers() {
        const userData = this.userServices.findAll();
        return {
            status: `Success`,
            userData
        };
    }

    @Post('/save')
    create(@Body() userBody: any) {
        return {
            status: 'Success',
            message: 'Usuario creado correctamente',
            userBody
        }
    }

    @Put('/update/:id')
    update(@Param('id') id: number, @Body() userBody: any) {
        return {
            id,
            status: 'Success',
            message: 'Datos del usuario actualizado',
            userBody
        }
    }

    @Delete('/delete/:id')
    remove(@Param('id') id: number) {
        return {
            status: 'Success',
            message: 'Datos eliminados correctamente'
        }
    }
}
