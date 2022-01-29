import { ImageEditor } from "./ImageEditor"
import { ImageIditorBackupManager } from "./ImageEditorBackupMananger"

const imageEditor = new ImageEditor("/home/user/media/image.png", "png")
const backupManager = new ImageIditorBackupManager(imageEditor)

backupManager.backup()
imageEditor.convertFormatTo("gif")

backupManager.backup()
imageEditor.convertFormatTo("bmp")

backupManager.backup()
imageEditor.convertFormatTo("jpg")

console.log(imageEditor) // jpg

backupManager.undo()
console.log(imageEditor) // bmp

backupManager.undo()
console.log(imageEditor) // gif

backupManager.undo()
console.log(imageEditor) // png

backupManager.undo() // no mementos
console.log(imageEditor) // png
