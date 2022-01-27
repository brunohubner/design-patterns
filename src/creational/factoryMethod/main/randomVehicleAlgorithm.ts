import { BicycleFactory } from "../factories/BicycleFactory"
import { CarFactory } from "../factories/CarFactory"
import { randomPosition } from "../utils/randomPosition"
import { Vehicle } from "../vehicle/vehicle"

export function randomVehicleAlgorithm(): Vehicle {
    const carFactory = new CarFactory()
    const bicycleFactory = new BicycleFactory()
    const onix = carFactory.getVehicle("Onix")
    const hb20 = carFactory.getVehicle("HB20")
    const corolla = carFactory.getVehicle("Corolla")
    const bmx = bicycleFactory.getVehicle("bmx")
    const vehicles = [onix, hb20, corolla, bmx]
    return vehicles[randomPosition(vehicles.length)]
}
