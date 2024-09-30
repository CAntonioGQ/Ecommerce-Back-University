import { Request, Response, NextFunction } from "express";
import { CardRepository } from "../../../domain/repository/card.repository";
import { CardEntity } from "../../entity/card.entity";

export class CardController {
  constructor(private cardRepository: CardRepository<CardEntity>) { }

  async createCard(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      const card = await this.cardRepository.create(body);
      res.status(201).json(card);
    } catch (error) {
      next(error);
    }
  }


  async listCard(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cards = await this.cardRepository.list();
      res.status(200).json(cards);
    } catch (error) {
      next(error);
    }
  }

  async getCardByPk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCard } = req.params;
      const card = await this.cardRepository.get(idCard);
      res.status(200).json(card);
    } catch (error) {
      next(error);
    }
  }

  async updateCard(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCard } = req.params;
      const body = req.body;
      const card = await this.cardRepository.update(idCard, body);
      res.status(200).json(card);
    } catch (error) {
      next(error);
    }
  }
}