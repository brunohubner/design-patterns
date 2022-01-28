import { DiscountStrategy } from "./DiscountStrategy"
import { EComemrceShoppingCart } from "./ECommerceShoppingCart"

export class NewDiscount extends DiscountStrategy {
    protected discount = 0

    getDiscount(cart: EComemrceShoppingCart): number {
        const total = cart.getTotal()

        if (total >= 150) {
            this.discount = 5
        }

        return total - (total * this.discount) / 100
    }
}
