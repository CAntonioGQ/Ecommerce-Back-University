import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
import { CardEntity } from "./card.entity";
  
  @Entity({name: 'core_user'})
  export class UserEntity {
    @PrimaryGeneratedColumn({name:'id_user', type: "integer"})
    idUser!: number;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'email', type:"varchar"})
    email!: string;

    @Column({name:'password', type:"varchar"})
    password!: string;

    @Column({name:'status', type:"integer"})
    status!: number;

    @CreateDateColumn({name:'created_at', type:"datetime"})
    createdAt!: Date;
    
    @UpdateDateColumn({name:'updated_at', type:"datetime"})
    updatedAt!: Date;
  }