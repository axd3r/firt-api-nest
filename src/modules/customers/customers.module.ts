import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './entities/customer.entity';
import { UsersModule } from '../users/users.module';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: Customer.name,
            schema: CustomerSchema
        }
    ]),
    UsersModule
],
    controllers: [CustomersController],
    providers: [CustomersService]
})
export class CustomersModule {}
