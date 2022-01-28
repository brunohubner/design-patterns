import { DeviceImplementation } from "./DeviceImplementation"

export class Tv implements DeviceImplementation {
    private name = "Tv"
    private volume = 10
    private power = false

    getName(): string {
        return this.name
    }
    setPower(powerStatus: boolean): void {
        this.power = powerStatus
    }
    getPower(): boolean {
        return this.power
    }
    setVolume(volume: number): void {
        if (volume < 0 || volume > 100) return
        this.volume = Math.round(volume)
    }
    getVolume(): number {
        return this.volume
    }
}
