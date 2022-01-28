import { DefaultDiscount } from "./shoppingCart/DefaultDiscount"
import { EComemrceShoppingCart } from "./shoppingCart/ECommerceShoppingCart"
import { NewDiscount } from "./shoppingCart/NewDiscount"

const shoppingCart = new EComemrceShoppingCart()
shoppingCart.setDiscount(new DefaultDiscount())
// shoppingCart.setDiscount(new NewDiscount())
shoppingCart.addProduct(
    { name: "Produto 1", price: 50 },
    { name: "Produto 2", price: 50 },
    { name: "Produto 3", price: 50 },
    { name: "Produto 4", price: 50 },
    { name: "Produto 5", price: 50 }
)

console.log("============================")
console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())
