import { Buyer } from "./Buyer"
import { Seller } from "./Seller"
import { SellerProduct } from "./SellerProduct"

export class Mediator {
    private sellers: Seller[] = []

    constructor(public name: string) {}

    addSeller(...sellers: Seller[]): void {
        sellers.forEach(seller => {
            this.sellers.push(seller)
            seller.setMediator(this)
        })
    }

    buy(id: string, buyer: Buyer): void {
        let product: SellerProduct | null

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id)

            if (product) {
                console.log(
                    `${buyer.name} comprou ${product.name} de ${this.sellers[i].name} em ${this.name}`
                )
                return
            }
        }
        console.log("Não foi encontrado nenhum produto com id " + id)
    }

    showProducts(): void {
        this.sellers.forEach(seller => seller.showProducts())
    }
}
