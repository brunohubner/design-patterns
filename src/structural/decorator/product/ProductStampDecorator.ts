import { ProductDecorator } from "./ProductDecorator"

export class ProductStampDecorator extends ProductDecorator {
    getName(): string {
        return this.product.getName() + " [ESTAMPADA]"
    }

    getPrice(): number {
        return this.product.getPrice() + 10
    }
}
