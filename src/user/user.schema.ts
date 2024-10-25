import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class userSchema extends Document{
    @Prop()
    id:number;

    @Prop()
    email:string;

    @Prop()
    password:string;
}
export const MockSchema = SchemaFactory.createForClass(userSchema);