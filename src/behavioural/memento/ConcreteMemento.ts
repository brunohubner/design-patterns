import { FileFormat } from "./FileFormat"
import { Memento } from "./Memento"

export class ConcreteMemento implements Memento {
    constructor(
        private name: string,
        private date: Date,
        private filePath: string,
        private fileFormat: FileFormat
    ) {}

    getName(): string {
        return this.name
    }

    getDate(): Date {
        return this.date
    }

    getFilePath(): string {
        return this.filePath
    }

    getFileFormat(): FileFormat {
        return this.fileFormat
    }
}
