import { ProductDecorator } from "./ProductDecorator"

export class ProductCustomizationDecorator extends ProductDecorator {
    getName(): string {
        return this.product.getName() + " [CUSTOMIZADA]"
    }

    getPrice(): number {
        return this.product.getPrice() + 25
    }
}
