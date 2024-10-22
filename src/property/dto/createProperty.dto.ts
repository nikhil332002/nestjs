import { IsInt, IsString, Length } from "class-validator";

export class CreatePropertyDto{
    @IsString()
    @Length(3,6,{message:"Error Length"})
    name:string;
    @IsString()
    description:string;
    @IsInt()
    area:number;
} 