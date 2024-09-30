import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";

import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'core_order' })
export class OrderEntity {
  @PrimaryGeneratedColumn({ name: 'id_order', type: "integer" })
  idOrder!: number;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: "id_products" })
  products!: ProductEntity[];

  @Column({ name: 'total', type: "integer" })
  total!: number;

  @Column({ name: 'status', type: "integer" })
  status!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user!: UserEntity;
  
  @CreateDateColumn({ name: 'created_at', type: "datetime" })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: "datetime" })
  updatedAt!: Date;
}