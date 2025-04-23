import { PartialType } from "@nestjs/swagger";
import { CreateUserDTO } from "./createUser.DTO";

export class UpdateUserDTO extends PartialType(CreateUserDTO){
    
}