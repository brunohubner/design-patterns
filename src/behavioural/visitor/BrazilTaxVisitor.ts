import { AlcoholicDrink } from "./AlcoholicDrink"
import { Cigarette } from "./Cigarette"
import { Food } from "./Food"
import { TaxVisitorProtocol } from "./TaxVisitorProtocol"

export class BrasilTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        const price = food.getPrice()
        return price + price * 0.05
    }

    calculateTaxesForCigarette(cigarette: Cigarette): number {
        const price = cigarette.getPrice()
        return price + price * 1.5
    }

    calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        const price = alcoholicDrink.getPrice()
        return price + price * 0.5
    }
}
