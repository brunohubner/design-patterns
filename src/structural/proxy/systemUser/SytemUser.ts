export type SystemUserAdresses = {
    street: string
    number: number
}

export interface SystemUser {
    firstName: string
    userName: string
    getAdresses(): Promise<SystemUserAdresses[]>
}
