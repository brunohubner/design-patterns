import { Customer } from "../customer/Customer"
import { EnterpriseCustomer } from "../customer/EnterpriseCustomer"
import { EnterpriseVehicle } from "../vahicle/EnterpriseVehicle"
import { Vehicle } from "../vahicle/Vehicle"
import { CreateVehicleCustomerFactory } from "./CreateVehicleCustomerFactory"

export class EnterpriseCreateVehicleCustomerFactory
    implements CreateVehicleCustomerFactory
{
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName)
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName)
        return new EnterpriseVehicle(vehicleName, customer)
    }
}
