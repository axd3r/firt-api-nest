import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/users.entity';
import { CreateUserDTO } from '../DTO/createUser.DTO';
import { UpdateUserDTO } from '../DTO/updateUser.DTO';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createUserDTO: CreateUserDTO) {
    const createdUser = new this.userModel(createUserDTO);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDTO, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return {
        status: "success",
        message: "Registo eliminado con exito"
    }
  }
}
