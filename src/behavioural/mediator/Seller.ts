import { Mediator } from "./Mediator"
import { SellerProduct } from "./SellerProduct"

export class Seller {
    private products: SellerProduct[] = []
    private mediator?: Mediator

    constructor(public name: string) {}

    showProducts(): void {
        this.products.forEach(product =>
            console.log(product.id, product.name, product.price)
        )
    }

    addProduct(...products: SellerProduct[]): void {
        products.forEach(product => this.products.push(product))
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }

    sell(id: string): SellerProduct | null {
        const productIndex = this.products.findIndex(
            product => product.id === id
        )
        if (productIndex < 0) return null
        return this.products.splice(productIndex, 1)[0]
    }
}
