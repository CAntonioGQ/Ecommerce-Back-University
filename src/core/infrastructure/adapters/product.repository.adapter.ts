import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { ProductRepository, Id, Query } from "../../domain/repository/product.repository";
import { ProductEntity } from "../entity/product.entity";
import { Product } from "../../domain/models/product";

export class ProductAdapterRepository implements ProductRepository<ProductEntity> {
  async create(data: Partial<ProductEntity>, query?: Query): Promise<ProductEntity> {
    const repository = database.getRepository(ProductEntity);
    const product = repository.create({
      ...data,
      status: Product.ENABLE
    });
    await repository.save(product);
    return product;
  }
  async list(query?: Query): Promise<ProductEntity[]> {
    const repository = database.getRepository(ProductEntity);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<ProductEntity> {
    const repository = database.getRepository(ProductEntity);
    const product = await repository.findOneBy({ idProduct: id as number });
    if (!product) {
      throw new NotFound("No existe un producto con el id proporcionado");
    }
    return product;
  }

  async update(id: Id, data: ProductEntity, query?: Query): Promise<ProductEntity> {
    const repository = database.getRepository(ProductEntity);
    await repository.update(id, data);
    return this.get(id, query);
  }

}
