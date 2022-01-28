import { DeviceImplementation } from "../device/DeviceImplementation"

export class RemoteControl {
    constructor(protected device: DeviceImplementation) {}

    togglePower(): void {
        this.device.setPower(!this.device.getPower())
        console.log(
            `${this.device.getName()} is ${
                this.device.getPower() ? "ON" : "OFF"
            }`
        )
    }
}
