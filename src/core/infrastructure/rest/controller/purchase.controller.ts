import { Request, Response, NextFunction } from "express";
import { PurchaseRepository } from "../../../domain/repository/purchase.repository";
import { PurchaseEntity } from "../../entity/purchase.entity";

export class PurchaseController {
  constructor(private purchaseRepository: PurchaseRepository<PurchaseEntity>) { }

  async createPurchase(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const purchase = await this.purchaseRepository.create(body);
      res.status(201).json(purchase);
    } catch (error) {
      next(error);
    }
  }

  async listPurchase(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const purchases = await this.purchaseRepository.list();
      res.status(200).json(purchases);
    } catch (error) {
      next(error);
    }
  }

  async getPurchaseByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idPurchase } = req.params;
      const purchase = await this.purchaseRepository.get(idPurchase);
      res.status(200).json(purchase);
    } catch (error) {
      next(error);
    }
  }

  async updatePurchase(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idPurchase } = req.params;
      const body = req.body;
      const purchase = await this.purchaseRepository.update(idPurchase, body);
      res.status(200).json(purchase);
    } catch (error) {
      next(error);
    }
  }
}