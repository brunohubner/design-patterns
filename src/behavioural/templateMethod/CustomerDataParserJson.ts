import { CustomerData } from "./CustomerData"
import { CustomerDataParser } from "./CustomerDataParser"
import fs from "fs"

export class CustomerDataParserJson extends CustomerDataParser {
    protected async parseData(): Promise<CustomerData[]> {
        const rawData = await fs.promises.readFile(this.filePath)
        return JSON.parse(rawData.toString()) as CustomerData[]
    }

    hook(): void {
        console.log("O hook foi executado")
    }
}
