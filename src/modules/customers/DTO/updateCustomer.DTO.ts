import { PartialType } from "@nestjs/swagger";
import { CreateCustomerDTO } from "./createCustomer.DTO";

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO){}