import { IsEmail, IsString, Length } from "class-validator";

export class userDto{
    @IsEmail()
    email:string;

    @IsString()
    @Length(3,6)
    password:string;
}