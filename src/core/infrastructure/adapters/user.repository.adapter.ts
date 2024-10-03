import { NotFound } from "http-errors";
import database from "../../../config/database/database";
import { UserRepository, Id, Query } from "../../domain/repository/user.repository";
import { UserEntity } from "../entity/user.entity";
import { User } from "../../domain/models/user";
import { compare } from "bcrypt";

export class UserAdapterRepository implements UserRepository<UserEntity> {
  async create(data: Partial<UserEntity>, query?: Query): Promise<UserEntity> {
    const repository = database.getRepository(UserEntity);
    const user = repository.create({
      ...data,
      status: User.ENABLE
    });
    await repository.save(user);
    return user;
  }
  async list(query?: Query): Promise<UserEntity[]> {
    const repository = database.getRepository(UserEntity);
    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<UserEntity> {
    const repository = database.getRepository(UserEntity);
    const user = await repository.findOneBy({ idUser: id as number });
    if (!user) {
      throw new NotFound("No existe un Usero con el id proporcionado");
    }
    return user;
  }

  async update(id: Id, data: UserEntity, query?: Query): Promise<UserEntity> {
    const repository = database.getRepository(UserEntity);
    await repository.update(id, data);
    return this.get(id, query);
  }

  async loginUser(email: string, password: string): Promise<UserEntity> {
    const repository = database.getRepository(UserEntity);
    const user = await repository.findOneBy({ email });

    if (!user) {
      throw new NotFound("No existe un usuario con el correo proporcionado");
    }
  

    if (password !== user.password) {
      throw new NotFound("Contraseña incorrecta");
    }
  
  
    return user;
  }

}
