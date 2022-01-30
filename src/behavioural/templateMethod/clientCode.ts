import path from "path"
import { CustomerDataParserJson } from "./CustomerDataParserJson"
import { CustomerDataParserTxt } from "./CustomerDataParserTxt"

async function run() {
    console.log("==========================")

    const filePathJson = path.resolve(__dirname, "files", "customer.json")
    const customerDataParserJson = new CustomerDataParserJson(filePathJson)
    await customerDataParserJson.fixCustomerData()
    console.log(customerDataParserJson.customerData)

    console.log("==========================")

    const filePathTxt = path.resolve(__dirname, "files", "customer.txt")
    const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt)
    await customerDataParserTxt.fixCustomerData()
    console.log(customerDataParserTxt.customerData)
}

run()
