import { MainDishBuilder } from "../../creational/builder/classes/MainDishBuilder"
import { VeganDishBuilder } from "../../creational/builder/classes/VeganDishBuilder"

export class BuilderFacade {
    private mainDishBuilder = new MainDishBuilder()
    private veganDishBuilder = new VeganDishBuilder()

    makeMeal(): void {
        const food = this.mainDishBuilder
            .makeMeal()
            .makeDessert()
            .makeBeverage()
        console.log(food.getMeal())
        console.log(food.getPrice())
    }

    makeVeganMeal(): void {
        const veganFood = this.veganDishBuilder.makeMeal()
        console.log(veganFood.getMeal())
        console.log(veganFood.getPrice())
    }
}
