import { DiscountStrategy } from "./DiscountStrategy"
import { EComemrceShoppingCart } from "./ECommerceShoppingCart"

export class DefaultDiscount extends DiscountStrategy {
    protected discount = 0

    getDiscount(cart: EComemrceShoppingCart): number {
        const total = cart.getTotal()

        if (total >= 100 && total < 200) {
            this.discount = 10
        } else if (total >= 200 && total < 300) {
            this.discount = 20
        } else if (total >= 300) {
            this.discount = 30
        }

        return total - (total * this.discount) / 100
    }
}
