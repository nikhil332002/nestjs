import { IsString } from "class-validator";

export class MsgDto{
    @IsString()
    content: string;
}