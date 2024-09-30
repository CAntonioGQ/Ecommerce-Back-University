export class User{
    static ENABLE = 1;
    static DISABLE= 2;
    static LOCK = 3;
    static PENDING = 4;
    static DELETE = 99;

    private idUser: number | undefined;
    private name: string | undefined;
    private email: string | undefined;
    private password: string | undefined;
    private status: number | undefined;

    public get getIdUser(): number | undefined{
        return this.idUser;
    }
    public set setIdUser(idUser: number | undefined){
        this.idUser = idUser;
    }
    public get getName(): string | undefined {
        return this.name;
    }

    public set setName(name: string | undefined){
        this.name = name;
    }
    public get getEmail(): string | undefined {
        return this.email;
    }
    public set setEmail(email: string | undefined){
        this.email = email;
    }

    public get getPassword(): string | undefined{
        return this.password;
    }
    public set setPassword(password: string | undefined){
        this.password = password;
    }
    public get getStatus(): number | undefined{
        return this.status;
    } 
    public set setStatus(status: number | undefined){
        this.status = status;
    }
}