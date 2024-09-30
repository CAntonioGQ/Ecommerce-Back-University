import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { CardEntity } from "../entity/card.entity";
import { Card } from "../../domain/models/card";
import { Id, CardRepository, Query } from "../../domain/repository/card.repository";
import { UserEntity } from "../entity/user.entity";

export class CardAdapterRepository implements CardRepository<CardEntity> {
  async create(data: Partial<CardEntity> & { idUser?: number }, query?: Query): Promise<CardEntity> {
    const repository = database.getRepository(CardEntity);
    
    let cardData: Partial<CardEntity> = {
      ...data,
      status: Card.ENABLE
    };
  
    if (data.idUser) {
      cardData.user = { idUser: data.idUser } as UserEntity;
      delete (cardData as any).idUser;
    }
  
    const card = repository.create(cardData);
    await repository.save(card);
    return card;
  }

  async list(query?: Query): Promise<CardEntity[]> {
    const repository = database.getRepository(CardEntity);
    return repository.find({
      relations:{
        user: true
      }
    });
  }

  async get(id: Id, query?: Query): Promise<CardEntity> {
    const repository = database.getRepository(CardEntity);
    const card = await repository.findOne({
      where: { idCard: id as number },
      relations: {
        user: true
      }
    });
    if (!card) {
      throw new NotFound("No existe una compra con el id proporcionado");
    }
    return card;
  }

  async update(id: Id, data: Partial<CardEntity>, query?: Query): Promise<CardEntity> {
    const repository = database.getRepository(CardEntity);
    await repository.update(id, data);
    return this.get(id, query);
  }
}