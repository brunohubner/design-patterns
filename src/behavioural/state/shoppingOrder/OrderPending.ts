import { OrderApproved } from "./OrderApproved"
import { OrderRejected } from "./OrderRejected"
import { ShoppingOrder } from "./ShoppingOrder"
import { ShoppingOrderState } from "./ShoppingOrderState"

export class OrderPending implements ShoppingOrderState {
    private name = "OrderPending"

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name
    }

    approvePayment(): void {
        this.order.setState(new OrderApproved(this.order))
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order))
    }

    waitPayment(): void {
        console.log("O pedido já está no pagamento pendente.")
    }

    shipOrder(): void {
        console.log("Não é possível enviar o pedido com pagamento pendente.")
    }
}
