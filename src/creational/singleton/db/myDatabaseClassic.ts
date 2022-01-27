import { IUser } from "../interfaces/IUser"

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null
    private users: IUser[] = []

    private constructor() {}

    static get instance(): MyDatabaseClassic {
        if (!MyDatabaseClassic._instance) {
            MyDatabaseClassic._instance = new MyDatabaseClassic()
        }
        return MyDatabaseClassic._instance
    }

    add(user: IUser): void {
        this.users.push(user)
    }

    remove(index: number): void {
        this.users.splice(index, 1)
    }

    show(): void {
        this.users.forEach(user => console.log(user))
    }
}
