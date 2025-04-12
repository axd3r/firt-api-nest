import { Body, Controller, Get, Post } from '@nestjs/common';

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
}
