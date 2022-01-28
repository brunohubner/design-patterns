import { Customer } from "../customer/Customer"
import { IndividualCustomer } from "../customer/IndividualCustomer"
import { IndividualVehicle } from "../vahicle/IndividualVehicle"
import { Vehicle } from "../vahicle/Vehicle"
import { CreateVehicleCustomerFactory } from "./CreateVehicleCustomerFactory"

export class IndividualCreateVehicleCustomerFactory
    implements CreateVehicleCustomerFactory
{
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName)
        return new IndividualVehicle(vehicleName, customer)
    }
}
