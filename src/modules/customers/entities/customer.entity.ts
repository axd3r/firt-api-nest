import { User } from "../../users/entities/users.entity";

export class Customer extends User {
    name: string;
    lastname: string;
    DNI: number;
    phone: number;
    address: string;
    birthDate?: Date;
  }