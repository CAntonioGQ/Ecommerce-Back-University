import { Router } from "express";
import { OrderController } from "../controller/order.controller";
import { OrderAdapterRepository } from "../../adapters/order.repository.adapter";

const orderRouter = Router();

const controller = new OrderController(new OrderAdapterRepository());

orderRouter.get("/orders/:idOrder", controller.getOrderByPk.bind(controller));
orderRouter.post("/orders", controller.createOrder.bind(controller));
orderRouter.get("/orders", controller.listOrder.bind(controller));
orderRouter.put("/orders/:idOrder", controller.updateOrder.bind(controller));

export default orderRouter;
