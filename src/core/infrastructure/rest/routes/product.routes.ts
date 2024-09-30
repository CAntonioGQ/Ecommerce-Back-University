import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { ProductAdapterRepository } from "../../adapters/product.repository.adapter";

const productRouter = Router();

const controller = new ProductController(new ProductAdapterRepository());

productRouter.get("/products/:idProduct", controller.getProductByPk.bind(controller));
productRouter.post("/products", controller.createProduct.bind(controller));
productRouter.get("/products", controller.listProduct.bind(controller));
productRouter.put("/products/:idProduct", controller.updateProduct.bind(controller));

export default productRouter;
