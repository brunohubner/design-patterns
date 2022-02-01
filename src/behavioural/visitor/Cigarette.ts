import { TaxVisitorProtocol } from "./TaxVisitorProtocol"
import { VisitableProduct } from "./VisitableProduct"

export class Cigarette extends VisitableProduct {
    constructor(protected name: string, protected price: number) {
        super(name, price)
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForCigarette(this)
    }
}
