import { Router } from "express";
import { CardController } from "../controller/card.controller";
import { CardAdapterRepository } from "../../adapters/card.repository.adapter";

const cardRouter = Router();

const controller = new CardController(new CardAdapterRepository());

cardRouter.get("/cards/:idCard", controller.getCardByPk.bind(controller));
cardRouter.post("/cards", controller.createCard.bind(controller));
cardRouter.get("/cards", controller.listCard.bind(controller));
cardRouter.put("/cards/:idCard", controller.updateCard.bind(controller));

export default cardRouter;
