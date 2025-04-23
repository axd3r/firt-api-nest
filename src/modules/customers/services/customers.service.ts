import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDTO } from '../DTO/createCustomer.DTO';
import { UpdateCustomerDTO } from '../DTO/updateCustomer.DTO';
import { User } from 'src/modules/users/entities/users.entity';

@Injectable()
export class CustomersService {
    constructor(
        @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) {}

    async findAll() {
        return this.customerModel.find().exec();
    }

    async findOne(id: string) {
        const customer = await this.customerModel.findById(id).exec();
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return customer;
    }

    async create(createCustomerDTO: CreateCustomerDTO) {

        const userExists = await this.userModel.exists({ _id: createCustomerDTO.user });
        if (!userExists) {
        throw new NotFoundException('User does not exist');
        }

        const customerExists = await this.customerModel.exists({ user: createCustomerDTO.user });
        if (customerExists) {
        throw new BadRequestException('This user already has an associated customer');
        }
        if (createCustomerDTO.birthDate) {
            if (typeof createCustomerDTO.birthDate === 'string') {
                createCustomerDTO.birthDate = new Date(createCustomerDTO.birthDate).getTime();
            }
        }
        const createdCustomer = new this.customerModel(createCustomerDTO);
        return createdCustomer.save();
    }

    async update(id: string, updateCustomerDTO: UpdateCustomerDTO) {
        if (updateCustomerDTO.hasOwnProperty('user')) {
            throw new BadRequestException('You cannot update the userId of a customer');
        }
        if (updateCustomerDTO.birthDate) {
            if (typeof updateCustomerDTO.birthDate === 'string') {
                updateCustomerDTO.birthDate = new Date(updateCustomerDTO.birthDate).getTime();
            }
        }
        const updatedCustomer = await this.customerModel
            .findByIdAndUpdate(id, updateCustomerDTO, { new: true })
            .exec();

        if (!updatedCustomer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return updatedCustomer;
    }

    async remove(id: string) {
        const result = await this.customerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return {
            status: "success",
            message: "Registo eliminado con exito"
        }
    }
}
