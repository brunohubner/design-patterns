import { EComemrceShoppingCart } from "./ECommerceShoppingCart"

export class DiscountStrategy {
    protected discount = 0

    getDiscount(cart: EComemrceShoppingCart): number {
        return cart.getTotal()
    }
}
