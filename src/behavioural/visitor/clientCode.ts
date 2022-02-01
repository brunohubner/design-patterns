import { AlcoholicDrink } from "./AlcoholicDrink"
import { BrasilTaxVisitor } from "./BrazilTaxVisitor"
import { Cigarette } from "./Cigarette"
import { Food } from "./Food"
import { UsTaxVisitor } from "./UsTaxVisitor"
import { VisitableProduct } from "./VisitableProduct"

const food = new Food("Hamburger", 15)
const cigarette = new Cigarette("Derb", 9)
const alcoholicDrink = new AlcoholicDrink("Skol", 6)

const brasilTaxVisitor = new BrasilTaxVisitor()
const usTaxVisitor = new UsTaxVisitor()

const cart: VisitableProduct[] = [food, cigarette, alcoholicDrink]
const total = cart.reduce((sum, item) => sum + item.getPrice(), 0)
const totalWithTaxesBrasil = cart.reduce(
    (sum, item) => sum + item.getPriceWithTaxes(brasilTaxVisitor),
    0
)
const totalWithTaxesUs = cart.reduce(
    (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
    0
)

console.log("=====================")
console.log(total)
console.log(totalWithTaxesBrasil)
console.log(totalWithTaxesUs)
