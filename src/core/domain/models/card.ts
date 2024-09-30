import { User } from "./user";

export class Card {
    static ENABLE = 1;
    static DISABLE = 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idCard: number | undefined;
    private digits: string | undefined;
    private cvv: number | undefined;
    private funds: number | undefined;
    private user: User | undefined;
    private status: number | undefined;
    private createdAt: Date | undefined;
    private updatedAt: Date | undefined;

    public get getIdCard(): number | undefined {
        return this.idCard;
    }
    public set setIdCard(idCard: number | undefined) {
        this.idCard = idCard;
    }

    public get getDigits(): string | undefined {
        return this.digits;
    }
    public set setDigits(digits: string | undefined) {
        this.digits = digits;
    }

    public get getCvv(): number | undefined {
        return this.cvv;
    }
    public set setCvv(cvv: number | undefined) {
        this.cvv = cvv;
    }

    public get getFunds(): number | undefined {
        return this.funds;
    }
    public set setFunds(funds: number | undefined) {
        this.funds = funds;
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