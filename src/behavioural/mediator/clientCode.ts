import { Buyer } from "./Buyer"
import { Mediator } from "./Mediator"
import { Seller } from "./Seller"

const mercadoLivre = new Mediator("Mercado Livre")

const vendedor1 = new Seller("Bruno")
vendedor1.addProduct(
    { id: "1", name: "Relógio", price: 299.89 },
    { id: "2", name: "Celular", price: 1799.89 },
    { id: "3", name: "Notebbok", price: 5899.89 }
)

const vendedor2 = new Seller("Ana")
vendedor2.addProduct(
    { id: "4", name: "Camiseta", price: 69.89 },
    { id: "5", name: "Calça", price: 139.89 },
    { id: "6", name: "Blusa", price: 299.89 }
)

mercadoLivre.addSeller(vendedor1, vendedor2)

const comprador1 = new Buyer("Paulo", mercadoLivre)
const comprador2 = new Buyer("Maria", mercadoLivre)
const comprador3 = new Buyer("Julia", mercadoLivre)

console.log("========================")
comprador1.viewProducts()
console.log("========================")

comprador1.buy("2")
comprador2.buy("6")
comprador1.buy("1")
comprador3.buy("5")

console.log("========================")
comprador2.viewProducts()
console.log("========================")
