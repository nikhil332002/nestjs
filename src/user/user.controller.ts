import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
    findUsers(@Param('email') email:string){
        return this.userService.find(email);
    }

    @Patch(':email')
    updateUser(@Param('email') email:string, @Body() body:userSchema){
        return this.userService.update(email, body);
    }

    @Delete(':email')
    removeUser(@Param('email') email:string){
        return this.userService.remove(email);
    }
}
