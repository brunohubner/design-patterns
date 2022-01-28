import { DeliveryFlyweight } from "./DeliveryFlyweight"
import { DeliveryLocation } from "./DeliveryLocation"
import {
    DeliveryLocationData,
    DeliveryLocationDictionary
} from "./deliveryTypes"

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {}

    private createKey(data: DeliveryLocationData): string {
        return Object.values(data)
            .map(item => item.replace(/\s+/, "").toLowerCase())
            .join("_")
    }

    makeLocation(intrinsecState: DeliveryLocationData): DeliveryFlyweight {
        const key = this.createKey(intrinsecState)
        if (key in this.locations) return this.locations[key]
        this.locations[key] = new DeliveryLocation(intrinsecState)
        return this.locations[key]
    }

    getLocations(): DeliveryLocationDictionary {
        return this.locations
    }
}
