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
import { OrderEntity } from "./order.entity";

@Entity({ name: 'core_purchases' })
export class PurchaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_purchase', type: "integer" })
  idPurchase!: number;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: "id_order" })
  order!: OrderEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user!: UserEntity;

  @Column({ name: 'status', type: "integer" })
  status!: number;

  @CreateDateColumn({ name: 'created_at', type: "datetime" })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: "datetime" })
  updatedAt!: Date;
}