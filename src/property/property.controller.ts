import { Body, Controller, Get, Headers, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';


@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return 'all properties'
    }

    @Get(':id')
    findOne(@Param() id){
        return id
    }

    // @Post()
    // create(){
    //     return 'create new property'
    // }

    @Post()
    @UsePipes(new ValidationPipe({whitelist:true}))
    create(@Body() body:CreatePropertyDto){
        return body;
    }

    @Patch(':id')
    update(
        @Param('id',ParseIntPipe)id,
        @Body() body:CreatePropertyDto,
        @Headers() Header,
    ){
        return Header;
    }
}
