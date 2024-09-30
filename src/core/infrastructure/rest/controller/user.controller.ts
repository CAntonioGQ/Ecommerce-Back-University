import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../../domain/repository/user.repository";
import { UserEntity } from "../../entity/user.entity";

export class UserController {
  constructor(private userRepository: UserRepository<UserEntity>) { }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const user = await this.userRepository.create(body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async listUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.userRepository.list();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUser } = req.params;
      const user = await this.userRepository.get(idUser);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUser } = req.params;
      const body = req.body;
      const user = await this.userRepository.update(idUser, body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await this.userRepository.loginUser(email, password);
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }
  
}
