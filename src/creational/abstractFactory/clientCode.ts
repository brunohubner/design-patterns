import { EnterpriseCreateVehicleCustomerFactory } from "./factories/EnterpriseCreateVehicleCustomerFactory"
import { IndividualCreateVehicleCustomerFactory } from "./factories/IndividualCreateVehicleCustomerFactory"

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory()
const individualFactory = new IndividualCreateVehicleCustomerFactory()

const enterpriseVehicle = enterpriseFactory.createVehicle("Testa", "Bruno")
const individualVehicle = individualFactory.createVehicle("Onix", "Ana")

console.log("========================================")
enterpriseVehicle.pickUp()
individualVehicle.pickUp()
