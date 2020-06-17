export enum UserRoles {
    CUSTOMER = 1,
    STORE = 2
}

export class User {
    id: number;
    type: UserRoles;
    name: string;
    email: string;
    password: string;
    pswRecToken?: string;
    pswRecTokenExpireDate?: Date;
    pswRecExpireDate?: Date;

    constructor(id: number,
                type: UserRoles,
                name: string,
                email: string,
                password: string,
                pswRecToken: string,
                pswRecTokenExpireDate: Date,
                pswRecExpireDate: Date) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.email = email;
        this.password = password;
        this.pswRecToken = pswRecToken;
        this.pswRecTokenExpireDate = pswRecTokenExpireDate
        this.pswRecExpireDate = pswRecExpireDate
    }
}
