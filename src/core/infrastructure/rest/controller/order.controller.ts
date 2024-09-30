import { Request, Response, NextFunction } from "express";
import { OrderRepository } from "../../../domain/repository/order.repository";
import { OrderEntity } from "../../entity/order.entity";

export class OrderController {
  constructor(private orderRepository: OrderRepository<OrderEntity>) { }

  async createOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const order = await this.orderRepository.create(body);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }

  async listOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await this.orderRepository.list();
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  async getOrderByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idOrder } = req.params;
      const order = await this.orderRepository.get(idOrder);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idOrder } = req.params;
      const body = req.body;
      const order = await this.orderRepository.update(idOrder, body);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}