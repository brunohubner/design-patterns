import { MyDataStructure } from "./MyDataStructure"
import { MyIteratorProtocol } from "./MyIteratorProtocol"

export class MyDefaultIterator<T> implements MyIteratorProtocol<T> {
    private index = 0

    constructor(private readonly dataStructure: MyDataStructure<T>) {}

    private makeValue(value: T): IteratorResult<T> {
        return { value, done: false }
    }

    reset(): void {
        this.index = 0
    }

    next(): IteratorResult<T> {
        const returnValue = this.makeValue(
            this.dataStructure.getItems()[this.index]
        )
        returnValue.done = this.index >= this.dataStructure.size()
        this.index++
        return returnValue
    }
}
