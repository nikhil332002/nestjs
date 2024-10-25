import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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