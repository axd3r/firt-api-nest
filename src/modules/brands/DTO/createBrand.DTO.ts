import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}