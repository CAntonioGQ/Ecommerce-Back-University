import { DataSource } from "typeorm";
import { ProductEntity } from "../../core/infrastructure/entity/product.entity";
import dotenv from "dotenv";
import { OrderEntity } from "../../core/infrastructure/entity/order.entity";
import { UserEntity } from "../../core/infrastructure/entity/user.entity";
import { PurchaseEntity } from "../../core/infrastructure/entity/purchase.entity";
import { CardEntity } from "../../core/infrastructure/entity/card.entity";

dotenv.config();

export default new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "Ecommerce",
  entities: [ProductEntity, OrderEntity, UserEntity, PurchaseEntity, CardEntity],
  synchronize: false,
  logging: false
});