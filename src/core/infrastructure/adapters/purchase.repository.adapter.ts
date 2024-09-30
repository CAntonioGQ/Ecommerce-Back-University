import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { PurchaseRepository, Id, Query } from "../../domain/repository/purchase.repository";
import { PurchaseEntity } from "../entity/purchase.entity";
import { Purchase } from "../../domain/models/purchase";
import { ProductEntity } from "../entity/product.entity";
import { UserEntity } from "../entity/user.entity";
import { OrderEntity } from "../entity/order.entity";
import { Order } from "../../domain/models/order";
import { CardEntity } from "../entity/card.entity";

export class PurchaseAdapterRepository implements PurchaseRepository<PurchaseEntity> {
  async create(data: Partial<PurchaseEntity>, query?: Query): Promise<PurchaseEntity> {
    const repository = database.getRepository(PurchaseEntity);
    const purchase = repository.create({
      ...data,
      status: Purchase.ENABLE
    });
    await repository.save(purchase);
    return purchase;
  }

  async list(query?: Query): Promise<PurchaseEntity[]> {
    const repository = database.getRepository(PurchaseEntity);
    return repository.find({
      relations:{
        user: true,
        order: true
      }
    });
  }

  async get(id: Id, query?: Query): Promise<PurchaseEntity> {
    const repository = database.getRepository(PurchaseEntity);
    const purchase = await repository.findOne({
      where: { idPurchase: id as number },
      relations: {
        user: true,
        order: true
      }
    });
    if (!purchase) {
      throw new NotFound("No existe una compra con el id proporcionado");
    }
    return purchase;
  }

  async update(id: Id, data: Partial<PurchaseEntity>, query?: Query): Promise<PurchaseEntity> {
    const repository = database.getRepository(PurchaseEntity);
    await repository.update(id, data);
    return this.get(id, query);
  }

  async processOrder(userId: number, products: Partial<ProductEntity>[], total: number): Promise<PurchaseEntity> {
    const userRepository = database.getRepository(UserEntity);
    const cardRepository = database.getRepository(CardEntity);
    const user = await userRepository.findOne({ where: { idUser: userId } });

    if (!user) {
      throw new NotFound("Usuario no encontrado");
    }

    const card = await cardRepository.findOne({ where: { user: { idUser: userId } } });

    if (!card) {
      throw new NotFound("Tarjeta no encontrada para el usuario");
    }

    if (card.funds < total) {
      throw new Error("Fondos insuficientes");
    }

    const orderRepository = database.getRepository(OrderEntity);
    const purchaseRepository = database.getRepository(PurchaseEntity);

    const order = orderRepository.create({
      user: user,
      products: products as ProductEntity[],
      total: total,
      status: Purchase.ENABLE
    });

    await orderRepository.save(order);

    const purchase = purchaseRepository.create({
      user: user,
      order: order,
      status: Purchase.ENABLE
    });

    await purchaseRepository.save(purchase);

    // Actualizar los fondos de la tarjeta
    card.funds -= total;
    await cardRepository.save(card);

    return purchase;
  }
}