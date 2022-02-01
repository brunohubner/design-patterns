import { TaxVisitorProtocol } from "./TaxVisitorProtocol"
import { VisitableProduct } from "./VisitableProduct"

export class Food extends VisitableProduct {
    constructor(protected name: string, protected price: number) {
        super(name, price)
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForFood(this)
    }
}
