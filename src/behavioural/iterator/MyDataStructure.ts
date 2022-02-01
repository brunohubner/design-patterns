import { MyDefaultIterator } from "./MyDefaultIterator"
import { MyIteratorProtocol } from "./MyIteratorProtocol"

export class MyDataStructure<T> {
    private items: T[] = []
    private iterator: MyIteratorProtocol<T> = new MyDefaultIterator(this)

    addItem(...items: T[]): void {
        items.forEach(item => this.items.push(item))
    }

    getItems(): T[] {
        return this.items
    }

    size(): number {
        return this.items.length
    }

    changeIterator(iterator: MyIteratorProtocol<T>): void {
        this.iterator = iterator
    }

    resetIterator(): void {
        this.iterator.reset()
    }

    [Symbol.iterator](): MyIteratorProtocol<T> {
        return this.iterator
    }
}
