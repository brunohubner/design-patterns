import { ImageEditor } from "./ImageEditor"
import { Memento } from "./Memento"

export class ImageIditorBackupManager {
    private mementos: Memento[] = []

    constructor(private readonly imageEditor: ImageEditor) {}

    backup(): void {
        this.mementos.push(this.imageEditor.save())
        console.log(
            `Backup: saving ${this.mementos[
                this.mementos.length - 1
            ].getName()}`
        )
    }

    undo(): void {
        const memento = this.mementos.pop()
        if (!memento) return console.log("Backup: no backups")

        this.imageEditor.restore(memento)
        console.log(`Backup: restoring ${memento.getName()}`)
    }

    showMementos(): void {
        this.mementos.forEach(memento => console.log(memento))
    }
}
