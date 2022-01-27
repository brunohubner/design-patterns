import { MyDatabaseClassic } from "./db/myDatabaseClassic"

const myDatabaseClassic = MyDatabaseClassic.instance
myDatabaseClassic.add({ id: "qaz", name: "Pedro" })
myDatabaseClassic.add({ id: "wsx", name: "Leo" })
myDatabaseClassic.add({ id: "edc", name: "Luiz" })
