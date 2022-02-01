import { MyDataStructure } from "./MyDataStructure"
import { MyIteratorProtocol } from "./MyIteratorProtocol"

export class MyReverseIterator<T> implements MyIteratorProtocol<T> {
    private index = this.dataStructure.size() - 1

    constructor(private readonly dataStructure: MyDataStructure<T>) {}

    private makeValue(value: T): IteratorResult<T> {
        return { value, done: false }
    }

    reset(): void {
        this.index = this.dataStructure.size() - 1
    }

    next(): IteratorResult<T> {
        const returnValue = this.makeValue(
            this.dataStructure.getItems()[this.index]
        )
        returnValue.done = this.index < 0
        this.index--
        return returnValue
    }
}
