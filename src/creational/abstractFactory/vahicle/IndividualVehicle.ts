import { Customer } from "../customer/Customer"
import { Vehicle } from "./Vehicle"

export class IndividualVehicle implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) {}

    pickUp(): void {
        console.log(
            `${this.name} [Individual] está buscando ${this.customer.name}`
        )
    }
}
