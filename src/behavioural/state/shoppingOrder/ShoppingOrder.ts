import { OrderPending } from "./OrderPending"
import { ShoppingOrderState } from "./ShoppingOrderState"

export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this)

    getState(): ShoppingOrderState {
        return this.state
    }

    setState(state: ShoppingOrderState): void {
        this.state = state
    }

    getStateName(): string {
        console.log("Order name: " + this.state.getName())
        return this.state.getName()
    }

    approvePayment(): void {
        this.state.approvePayment()
    }

    rejectPayment(): void {
        this.state.rejectPayment()
    }

    waitPayment(): void {
        this.state.waitPayment()
    }

    shipOrder(): void {
        this.state.shipOrder()
    }
}
