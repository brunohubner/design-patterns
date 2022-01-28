import { Customer } from "../customer/Customer"
import { Vehicle } from "./Vehicle"

export class EnterpriseVehicle implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) {}

    pickUp(): void {
        console.log(
            `${this.name} [Enterprise] está buscando ${this.customer.name}`
        )
    }
}
