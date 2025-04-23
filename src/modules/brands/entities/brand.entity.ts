import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true})
export class Brand {
    @Prop({required: true, unique: true})
    name: string;

    @Prop({type: String})
    description: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);