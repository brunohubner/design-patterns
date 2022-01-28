import { Customer } from "../customer/Customer"
import { Vehicle } from "../vahicle/Vehicle"

export interface CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer
    createVehicle(vehicleName: string, customerName: string): Vehicle
}
