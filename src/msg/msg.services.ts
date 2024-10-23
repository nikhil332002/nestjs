import { Injectable } from "@nestjs/common";
import { MsgRepository } from "./msg.repository";

@Injectable()
export class MsgServices{

    constructor(public msgRepo:MsgRepository){}
    findOne(id:string){
        return this.msgRepo.findOne(id);
    }
    findAll(){
        return this.msgRepo.findAll();
    }
    create(content:string){
        return this.msgRepo.create(content);
    }
}