import { Mediator } from "./Mediator"

export class Buyer {
    constructor(public name: string, private mediator: Mediator) {}

    viewProducts(): void {
        this.mediator.showProducts()
    }

    buy(id: string) {
        this.mediator.buy(id, this)
    }
}
