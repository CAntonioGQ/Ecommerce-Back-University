import { Product } from "./product";
import { User } from "./user";

export class Purchase {
    static ENABLE = 1;
    static DISABLE= 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;
    
    private idPurchase: number | undefined;
    private product: Product | undefined;
    private user: User | undefined;
    private status: number | undefined;
    private createdAt: Date | undefined;
    private updatedAt: Date | undefined;

    public get getIdPurchase(): number | undefined {
        return this.idPurchase;
    }
    public set setIdPurchase(idPurchase: number | undefined) {
        this.idPurchase = idPurchase;
    }

    public get getProduct(): Product | undefined {
        return this.product;
    }
    public set setProduct(product: Product | undefined) {
        this.product = product;
    }

    public get getUser(): User | undefined {
        return this.user;
    }
    public set setUser(user: User | undefined) {
        this.user = user;
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