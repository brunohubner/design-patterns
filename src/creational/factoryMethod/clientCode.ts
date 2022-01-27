import { randomVehicleAlgorithm } from "./main/randomVehicleAlgorithm"
import { randomPosition } from "./utils/randomPosition"

const customers = ["Bruno", "Ana", "Maria", "Pedro", "Paula", "Luiz", "Bia"]

for (let i = 0; i < 10; i++) {
    const vehicle = randomVehicleAlgorithm()
    const customer = customers[randomPosition(customers.length)]
    console.log("=================================")
    vehicle.pickUp(customer)
    vehicle.stop()
}
