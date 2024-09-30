import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";
import { UserEntity } from "./user.entity";
  
  @Entity({name: 'core_card'})
  export class CardEntity {
    @PrimaryGeneratedColumn({name:'id_card', type: "integer"})
    idCard!: number;
  
    @Column({name:'digits', type:"varchar"})
    digits!: number;
  
    @Column({name:'cvv', type:"decimal"})
    cvv!: number;

    @Column({name:'funds', type:"decimal"})
    funds!: number;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: "id_user" })
    user!: UserEntity;

    @Column({name:'status', type:"integer"})
    status!: number;

    @CreateDateColumn({name:'created_at', type:"datetime"})
    createdAt!: Date;
    
    @UpdateDateColumn({name:'updated_at', type:"datetime"})
    updatedAt!: Date;
  }