import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'core_products'})
  export class ProductEntity {
    @PrimaryGeneratedColumn({name:'id_product', type: "integer"})
    idProduct!: number;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'price', type:"decimal"})
    price!: number;

    @Column({name:'url_image', type:"varchar"})
    urlImage!: string;

    @Column({name:'description', type:"varchar"})
    description!: string;

    @Column({name:'status', type:"integer"})
    status!: number;

    @CreateDateColumn({name:'created_at', type:"datetime"})
    createdAt!: Date;
    
    @UpdateDateColumn({name:'updated_at', type:"datetime"})
    updatedAt!: Date;
  }