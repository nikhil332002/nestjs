import { readFile, writeFile } from "fs/promises";

export class MsgRepository{
    async findOne(id:string){
        const contents = await readFile('msg.json','utf8');
        const msg = JSON.parse(contents);
        return msg[id];
    }
    async findAll(){
        const contents = await readFile('msg.json','utf8');
        const msg = JSON.parse(contents);
        return msg;
    }
    async create(content:string){
        const contents = await readFile('msg.json','utf8');
        const msg = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        msg[id] = {id,content}
        await writeFile('msg.json',JSON.stringify(msg));
    }
}