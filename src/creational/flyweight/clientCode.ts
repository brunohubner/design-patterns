import { DeliveryFactory } from "./delivery/DeliverFactory"
import { deliveryContext } from "./delivery/deliveryContext"

const factory = new DeliveryFactory()
deliveryContext({
    factory,
    city: "São Paulo",
    name: "Paulo",
    number: "25b",
    street: "Av. Brasil"
})
deliveryContext({
    factory,
    city: "Rio de Janeiro",
    name: "Leo",
    number: "35",
    street: "Av. JK"
})
deliveryContext({
    factory,
    city: "Belo Horizonte",
    name: "Ana",
    number: "135",
    street: "Rua Mariana"
})
deliveryContext({
    factory,
    city: "Vitória",
    name: "Bruno",
    number: "45b",
    street: "Av. Andradas"
})
deliveryContext({
    factory,
    city: "Salvador",
    name: "Bia",
    number: "32",
    street: "Rua Arcanjo"
})
console.log("====================================")
console.log(factory.getLocations())
