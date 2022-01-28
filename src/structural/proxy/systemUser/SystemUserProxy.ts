import { AdminUser } from "./AdminUser"
import { SystemUser, SystemUserAdresses } from "./SytemUser"

export class SystemUserProxy implements SystemUser {
    private realUser: SystemUser | null = null
    private realUserAddresses: SystemUserAdresses[] | null = null

    constructor(public firstName: string, public userName: string) {}

    private createUser(): SystemUser {
        if (!this.realUser) {
            this.realUser = new AdminUser(this.firstName, this.userName)
        }
        return this.realUser
    }

    async getAdresses(): Promise<SystemUserAdresses[]> {
        this.realUser = this.createUser()

        if (!this.realUserAddresses) {
            this.realUserAddresses = await this.realUser.getAdresses()
        }

        return this.realUserAddresses
    }
}
