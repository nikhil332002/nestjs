import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    password:string;

    @AfterInsert()
    logInsert(){
        console.log("Inserted user with user id",this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("updated user id",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("removed user id",this.id)
    }
}