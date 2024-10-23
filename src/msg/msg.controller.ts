import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { MsgServices } from './msg.services';
import { MsgDto } from './dto/msg.dto';

@Injectable()
@Controller('msg')
export class MsgController {
    constructor(public msgServices:MsgServices){}

    @Get()
    listMsg(){
        return this.msgServices.findAll();
    }
    @Post()
    createMsg(@Body() body:MsgDto){
        return this.msgServices.create(body.content);
    }
    @Get('/:id')
    getMsg(@Param('id') id:string){
        return this.msgServices.findOne(id);
    }
}
