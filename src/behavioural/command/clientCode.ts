import { LightIntensityCommand } from "./LightIntensityCommand"
import { LightPowerCommand } from "./LightPowerCommand"
import { SmartHouseLight } from "./SmartHouseLight"
import { SmartHouseApp } from "./SmatHouseApp"

// Receiver
const bedroomLight = new SmartHouseLight("Luz quarto")
const bathroomLight = new SmartHouseLight("Luz banheiro")

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight)
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight)
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight)
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomLight)

// Invoker
const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand("btn-1", bedroomLightPowerCommand)
smartHouseApp.addCommand("btn-2", bathroomLightPowerCommand)
smartHouseApp.addCommand("btn-3", bedroomLightIntensityCommand)
smartHouseApp.addCommand("btn-4", bathroomLightIntensityCommand)

smartHouseApp.executeCommand("btn-1")
smartHouseApp.undoCommand("btn-1")

smartHouseApp.executeCommand("btn-2")
smartHouseApp.undoCommand("btn-2")

for (let i = 0; i < 5; i++) {
    smartHouseApp.executeCommand("btn-3")
}

for (let i = 0; i < 3; i++) {
    smartHouseApp.undoCommand("btn-3")
}

for (let i = 0; i < 5; i++) {
    smartHouseApp.executeCommand("btn-4")
}

for (let i = 0; i < 3; i++) {
    smartHouseApp.undoCommand("btn-4")
}
