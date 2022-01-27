export abstract class AbstractMeal {
    constructor(private name: string, private price: number) {}

    getPrice(): number {
        return this.price
    }
}
