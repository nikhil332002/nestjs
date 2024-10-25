import { Injectable } from '@nestjs/common';
import { userSchema } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(userSchema.name) private userModel: Model<userSchema>){}

    async create(email:string,password:string){
        const user = new this.userModel({email,password});
        return user.save()
    }


    async find(email:string){
        return this.userModel.find({email}).exec();
    }

    async update(email:string,attrs:Partial<userSchema>){
        const user = await this.userModel.findOne({email})
        Object.assign(user,attrs)
        return user.save();
    }

    async remove(email:string){
        const user = await this.userModel.findOneAndDelete({email})
        return user;
    }

}
