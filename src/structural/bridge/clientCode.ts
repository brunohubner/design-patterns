import { Radio } from "./device/Radio"
import { Tv } from "./device/Tv"
import { RemoteControl } from "./remoteControl/RemoteControl"
import { RemoteControlWithVolume } from "./remoteControl/RemoteControlWithVolume"

export function clientCode(
    abstraction: RemoteControl | RemoteControlWithVolume
): void {
    abstraction.togglePower() // set to true

    // Type Guard
    if (!("volumeUp" in abstraction)) return

    abstraction.volumeUp() // 20
    abstraction.volumeUp() // 30
    abstraction.volumeDown() //20
}

const tv = new Tv()
const radio = new Radio()

console.log("======================")
const tvRemoteControl = new RemoteControlWithVolume(tv)
clientCode(tvRemoteControl)

console.log("======================")
const radioRemoteControl = new RemoteControl(radio)
clientCode(radioRemoteControl)
