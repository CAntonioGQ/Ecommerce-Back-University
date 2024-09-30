export type Query = Record<string, any>;

export type Id = string | number;

export interface OrderRepository<T> {
  create(data: Partial<T>, query?: Query): Promise<T>;
  list(query?: Query): Promise<T[]>;
  get(id: Id, query?: Query): Promise<T>;
  update(id: Id, data: T, query?: Query): Promise<T>;
}