import { ProductProtocol } from "./ProductProtocol"

export class TShirt implements ProductProtocol {
    private name = "Camiseta"
    private price = 49.89

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}
