import { SystemUser, SystemUserAdresses } from "./SytemUser"

export class AdminUser implements SystemUser {
    constructor(public firstName: string, public userName: string) {}

    async getAdresses(): Promise<SystemUserAdresses[]> {
        return new Promise(resolve => {
            return setTimeout(() => {
                return resolve([
                    { street: "Av. Brasil", number: 50 },
                    { street: "Rua Jk.", number: 40 },
                    { street: "Av. Paulista", number: 25 }
                ])
            }, 2000)
        })
    }
}
