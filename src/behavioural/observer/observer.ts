interface Observable<T> {
    subscribe(...observers: Observer<T>[]): void
    unsubscribe(observer: Observer<T>): void
    notify(): void
}

interface Observer<T> {
    update(...args: T[]): void
}

// Concrete Observable
class ConcreteObservable<T> implements Observable<T> {
    private observers: Observer<T>[] = []

    constructor(public element: T) {}

    subscribe(...observers: Observer<T>[]): void {
        observers.forEach(observer => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer)
            }
        })
    }

    unsubscribe(observer: Observer<T>): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex < 0) return
        this.observers.splice(observerIndex, 1)
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this.element))
    }
}

// Concrete Observer
class ParagraphObserver implements Observer<HTMLParagraphElement> {
    constructor(public element: HTMLParagraphElement) {}

    update(...inputs: HTMLInputElement[]): void {
        inputs.forEach(input => (this.element.innerHTML = input.value))
    }
}

// Client code
const root = document.getElementById("root")

function makeInput(): HTMLInputElement {
    const input = document.createElement("input")
    root?.appendChild(input)
    return input
}

function makeParagraph(): HTMLParagraphElement {
    const p = document.createElement("p")
    root?.appendChild(p)
    p.innerHTML = "..."
    return p
}

function run() {
    const input1 = new ConcreteObservable(makeInput())

    const paragraph1 = new ParagraphObserver(makeParagraph())
    const paragraph2 = new ParagraphObserver(makeParagraph())
    const paragraph3 = new ParagraphObserver(makeParagraph())

    input1.subscribe(paragraph1, paragraph2, paragraph3)

    input1.element.addEventListener("keyup", () => input1.notify())

    input1.unsubscribe(paragraph2)
}

run()
