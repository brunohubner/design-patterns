import { DeliveryFactory } from "./DeliverFactory"

interface IDeliveryContextArgs {
    factory: DeliveryFactory
    name: string
    number: string
    street: string
    city: string
}

interface IDeliveryContextFn {
    (args: IDeliveryContextArgs): void
}

export const deliveryContext: IDeliveryContextFn = ({
    city,
    factory,
    name,
    number,
    street
}) => {
    const location = factory.makeLocation({ street, city })
    location.deliver(name, number)
}
