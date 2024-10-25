import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userSchema } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post()
    async createUser(@Body() body:userSchema){
        await this.userService.create(body.email,body.password);
    }

    @Get(':email')
    findUser(@Param('email') email:string){
        return this.userService.find(email);
    }
}
