import "reflect-metadata";
import express from "express";
import cors from "cors";
import database from "./config/database/database";
import productRouter from "./core/infrastructure/rest/routes/product.routes";
import dotenv from "dotenv";
import cardRouter from "./core/infrastructure/rest/routes/card.routes";
import orderRouter from "./core/infrastructure/rest/routes/order.routes";
import userRouter from "./core/infrastructure/rest/routes/user.routes";
import purchaseRouter from "./core/infrastructure/rest/routes/purchase.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error);

app.use('/api', productRouter, cardRouter, orderRouter, userRouter, purchaseRouter);

app.listen(PORT, () => {
  console.log('App executing on port: ' + PORT);
});

//POST COMMENTsdsds