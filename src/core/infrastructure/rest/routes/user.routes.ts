import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { UserAdapterRepository } from "../../adapters/user.repository.adapter";

const userRouter = Router();

const controller = new UserController(new UserAdapterRepository());

userRouter.get("/users/:idUser", controller.getUserByPk.bind(controller));
userRouter.post("/users", controller.createUser.bind(controller));
userRouter.get("/users", controller.listUser.bind(controller));
userRouter.put("/users/:idUser", controller.updateUser.bind(controller));
userRouter.post("/users/login", controller.loginUser.bind(controller));

export default userRouter;
