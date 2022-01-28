import { RemoteControl } from "./RemoteControl"

type VolumeOperation = "+" | "-"

export class RemoteControlWithVolume extends RemoteControl {
    private volumeMananger(volumeOperation: VolumeOperation): void {
        const oldVolume = this.device.getVolume()
        let newVolume: number

        if (volumeOperation === "+") {
            newVolume = oldVolume + 10
        } else {
            newVolume = oldVolume - 10
        }

        this.device.setVolume(newVolume)
        console.log(`${this.device.getName()} volume: ${newVolume}`)
    }

    volumeUp(): void {
        this.volumeMananger("+")
    }

    volumeDown(): void {
        this.volumeMananger("-")
    }
}
