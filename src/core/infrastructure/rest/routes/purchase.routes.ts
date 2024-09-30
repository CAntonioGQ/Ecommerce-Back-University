import { Router } from "express";
import { PurchaseController } from "../controller/purchase.controller";
import { PurchaseAdapterRepository } from "../../adapters/purchase.repository.adapter";

const purchaseRouter = Router();

const controller = new PurchaseController(new PurchaseAdapterRepository());

purchaseRouter.get("/purchases/:idPurchase", controller.getPurchaseByPk.bind(controller));
purchaseRouter.post("/purchases", controller.createPurchase.bind(controller));
purchaseRouter.get("/purchases", controller.listPurchase.bind(controller));
purchaseRouter.put("/purchases/:idPurchase", controller.updatePurchase.bind(controller));

export default purchaseRouter;
