import { ProductCustomizationDecorator } from "./product/ProductCustomizationDecorator"
import { ProductStampDecorator } from "./product/ProductStampDecorator"
import { TShirt } from "./product/TShirt"

const tShirt = new TShirt()
const tShirtWithStamp = new ProductStampDecorator(tShirt)
const customizedTShirt = new ProductCustomizationDecorator(tShirt)
const customizedAdnStampedTShirt = new ProductCustomizationDecorator(
    tShirtWithStamp
)

console.log("=======================")
console.log(tShirt.getPrice(), tShirt.getName())
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName())
console.log(customizedTShirt.getPrice(), customizedTShirt.getName())
console.log(
    customizedAdnStampedTShirt.getPrice(),
    customizedAdnStampedTShirt.getName()
)
