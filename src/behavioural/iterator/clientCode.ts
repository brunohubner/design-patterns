import { MyDataStructure } from "./MyDataStructure"
import { MyReverseIterator } from "./MyReverseIterator"

const dataStructure = new MyDataStructure<string>()
dataStructure.addItem("A", "B", "C", "D", "E", "F")

console.log("===========================")
const [a, b] = dataStructure
console.log("Roubados: ", a, b)
console.log("Executei varias veses depois usei o iterador")
const [c, d, ...rest] = dataStructure
console.log(c, d, rest)

console.log("===========================")

dataStructure.resetIterator()
for (const data of dataStructure) {
    console.log(data)
}

console.log("===========================")

dataStructure.changeIterator(new MyReverseIterator(dataStructure))
for (const data of dataStructure) {
    console.log(data)
}

console.log("===========================")

console.log("AQUI PRECISO ZERAR O ITERATOR")
dataStructure.resetIterator()
for (const data of dataStructure) {
    console.log(data)
}
console.log("===========================")
