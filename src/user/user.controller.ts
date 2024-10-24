import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { userDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { updateUserDto } from './dtos/updateUser.dto';

@Controller('auth')
export class UserController {

    constructor(private userService:UserService){}
    @Post('/signup')
    createUser(@Body() body:userDto){
        this.userService.create(body.email,body.password);
    }

    @Get('/:id')
    findUser(@Param('id') id:string){
        return this.userService.findOne(parseInt(id))
    }

    @Get()
    findAllUsers(@Query('email') email:string){
        return this.userService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.userService.remove(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id:string, @Body() body:updateUserDto){
        return this.userService.update(parseInt(id), body);
    }
}
