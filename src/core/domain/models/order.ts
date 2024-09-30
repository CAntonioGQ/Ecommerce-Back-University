import { Product } from "./product";
import { User } from "./user";

export class Order {
    static ENABLE = 1;
    static DISABLE= 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idOrder: number | undefined;
    private products: Product[] | undefined;
    private user: User | undefined;
    private total: number | undefined;
    private status: number | undefined;
    private createdAt: Date | undefined;
    private updatedAt: Date | undefined;

    public get getIdOrder(): number | undefined {
        return this.idOrder;
    }
    public set setIdOrder(idOrder: number | undefined) {
        this.idOrder = idOrder;
    }

    public get getProducts(): Product[] | undefined {
        return this.products;
    }
    public set setProducts(products: Product[] | undefined) {
        this.products = products;
    }

    public get getUser(): User | undefined {
        return this.user;
    }
    public set setUser(user: User | undefined) {
        this.user = user;
    }

    public get getTotal(): number | undefined {
        return this.total;
    }
    public set setTotal(total: number | undefined) {
        this.total = total;
    }

    public get getStatus(): number | undefined {
        return this.status;
    }
    public set setStatus(status: number | undefined) {
        this.status = status;
    }

    public get getCreatedAt(): Date | undefined {
        return this.createdAt;
    }
    public set setCreatedAt(createdAt: Date | undefined) {
        this.createdAt = createdAt;
    }

    public get getUpdatedAt(): Date | undefined {
        return this.updatedAt;
    }
    public set setUpdatedAt(updatedAt: Date | undefined) {
        this.updatedAt = updatedAt;
    }
}