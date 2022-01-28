import { DiscountStrategy } from "./DiscountStrategy"
import { ECommerceProduct } from "./ECommerceProduct"

export class EComemrceShoppingCart {
    private products: ECommerceProduct[] = []
    private discount: DiscountStrategy = new DiscountStrategy()

    addProduct(...products: ECommerceProduct[]): void {
        products.forEach(product => this.products.push(product))
    }

    getProducts(): ECommerceProduct[] {
        return this.products
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0)
    }

    getTotalWithDiscount(): number {
        return this.discount.getDiscount(this)
    }

    setDiscount(discount: DiscountStrategy): void {
        this.discount = discount
    }
}
