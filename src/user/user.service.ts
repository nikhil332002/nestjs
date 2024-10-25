import { Injectable } from '@nestjs/common';
import { userSchema } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(userSchema.name) private userModel: Model<userSchema>){}

    create(){
        
    }
}
