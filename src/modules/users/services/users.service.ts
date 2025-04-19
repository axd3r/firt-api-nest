import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        private configService: ConfigService
    ) {}

    private coiterID = 1;
    private users: User[] = [
        {
            id: 1,
            email: 'joaquin@gmail.com',
            password: '1234560',
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ];

    findAll() {
        const apiKey = this.configService.get('API_KEY');
        const database = this.configService.get('DATABASE_NAME')
        console.log(apiKey, database);
        return this.users;
    }
}
