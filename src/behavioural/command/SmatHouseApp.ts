import { SmartHouseCommand } from "./SmartHouseCommand"

interface SmartHouseCommandsData {
    [key: string]: SmartHouseCommand
}

export class SmartHouseApp {
    private commands: SmartHouseCommandsData = {}

    addCommand(key: string, command: SmartHouseCommand): void {
        this.commands[key] = command
    }

    executeCommand(key: string): void {
        this.commands[key].execute()
    }

    undoCommand(key: string): void {
        this.commands[key].undo()
    }
}
