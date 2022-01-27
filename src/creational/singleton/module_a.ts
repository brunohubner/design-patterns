import "./module_b"
import { MyDatabaseClassic } from "./db/myDatabaseClassic"

const myDatabaseClassic = MyDatabaseClassic.instance
myDatabaseClassic.add({ id: "jhh", name: "Ana" })
myDatabaseClassic.add({ id: "jhy", name: "Bia" })
myDatabaseClassic.add({ id: "tre", name: "Bruno" })
myDatabaseClassic.show()
