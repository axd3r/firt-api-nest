import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(): string {
        return `Controlador de usuarios`;
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
