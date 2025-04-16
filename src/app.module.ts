import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/controllers/products.controller';
import { CategoriesController } from './modules/categories/controllers/categories.controller';
import { UsersController } from './modules/users/controllers/users.controller';
import { OrdersController } from './modules/orders/controllers/orders.controller';
import { CustomersController } from './modules/customers/controllers/customers.controller';
import { BrandsController } from './modules/brands/controllers/brands.controller';
import { OrdersService } from './modules/orders/services/orders.service'; 
import { ProductsService } from './modules/products/services/products.service';
import { BrandsService } from './modules/brands/services/brands.service';
import { CategoriesService } from './modules/categories/services/categories.service'; 
import { CustomersService } from './modules/customers/services/customers.service';
import { UsersService } from './modules/users/services/users.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { BrandsModule } from './modules/brands/brands.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [UsersModule, ProductsModule, CategoriesModule, BrandsModule, OrdersModule, CustomersModule],
  controllers: [AppController, ProductsController, CategoriesController, UsersController, OrdersController, CustomersController, BrandsController],
  providers: [AppService, ProductsService, OrdersService, BrandsService, CategoriesService, CustomersService, UsersService],
})
export class AppModule {}
