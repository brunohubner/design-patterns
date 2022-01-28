import { DeliveryFlyweight } from "./DeliveryFlyweight"
import { DeliveryLocationData } from "./deliveryTypes"

export class DeliveryLocation implements DeliveryFlyweight {
    constructor(private readonly intrinsecState: DeliveryLocationData) {}

    deliver(name: string, number: string): void {
        console.log("====================================")
        console.log("Entrega para %s", name)
        console.log("Em", this.intrinsecState.street, this.intrinsecState.city)
        console.log("Número: ", number)
    }
}
