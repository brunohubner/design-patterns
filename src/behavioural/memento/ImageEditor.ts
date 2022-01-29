import { ConcreteMemento } from "./ConcreteMemento"
import { FileFormat } from "./FileFormat"
import { Memento } from "./Memento"

// Originator
export class ImageEditor {
    constructor(private filePath: string, private fileFormat: FileFormat) {}

    convertFormatTo(fileFormat: FileFormat): void {
        this.fileFormat = fileFormat
        const newFilePath = this.filePath.split(".").slice(0, -1).join("")
        this.filePath = newFilePath + "." + fileFormat
    }

    save(): Readonly<Memento> {
        const date = new Date()

        return new ConcreteMemento(
            date.toISOString(),
            date,
            this.filePath,
            this.fileFormat
        )
    }

    restore(memento: Memento): void {
        const concreteMemento = memento as ConcreteMemento
        this.filePath = concreteMemento.getFilePath()
        this.fileFormat = concreteMemento.getFileFormat()
    }
}
