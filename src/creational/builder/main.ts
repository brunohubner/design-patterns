import { MainDishBuilder } from "./classes/MainDishBuilder"
import { VeganDishBuilder } from "./classes/VeganDishBuilder"

const mainDishBuilder = new MainDishBuilder()
const food = mainDishBuilder.makeMeal().makeDessert().makeBeverage()
console.log(food.getMeal())
console.log(food.getPrice())

const veganDishBuilder = new VeganDishBuilder()
const veganFood = veganDishBuilder.makeMeal()
console.log(veganFood.getMeal())
console.log(veganFood.getPrice())
