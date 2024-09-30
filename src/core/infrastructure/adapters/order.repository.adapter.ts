import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { OrderEntity } from "../entity/order.entity";
import { Order } from "../../domain/models/order";
import { Id, OrderRepository, Query } from "../../domain/repository/order.repository";

export class OrderAdapterRepository implements OrderRepository<OrderEntity> {
  async create(data: Partial<OrderEntity>, query?: Query): Promise<OrderEntity> {
    const repository = database.getRepository(OrderEntity);
    const order = repository.create({
      ...data,
      status: Order.ENABLE
    });
    await repository.save(order);
    return order;
  }

  async list(query?: Query): Promise<OrderEntity[]> {
    const repository = database.getRepository(OrderEntity);
    return repository.find({
      relations:{
        products: true
      }
    });
  }

  async get(id: Id, query?: Query): Promise<OrderEntity> {
    const repository = database.getRepository(OrderEntity);
    const order = await repository.findOne({
      where: { idOrder: id as number },
      relations: {
        products: true
      }
    });
    if (!order) {
      throw new NotFound("No existe una compra con el id proporcionado");
    }
    return order;
  }

  async update(id: Id, data: Partial<OrderEntity>, query?: Query): Promise<OrderEntity> {
    const repository = database.getRepository(OrderEntity);
    await repository.update(id, data);
    return this.get(id, query);
  }

  
}