import { Body, Controller, Post } from '@nestjs/common';
import { userDto } from './dtos/user.dto';

@Controller('auth')
export class UserController {
    @Post('/signup')
    createUser(@Body() body:userDto){
        console.log(body);
    }
}
