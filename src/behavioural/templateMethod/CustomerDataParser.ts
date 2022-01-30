import { CustomerData } from "./CustomerData"

export abstract class CustomerDataParser {
    public customerData: CustomerData[] = []

    constructor(protected filePath: string) {}

    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseData()
        this.hook()
        this.customerData = this.fixCpf()
    }

    private fixCpf(): CustomerData[] {
        return this.customerData.map(customer => {
            if (!customer.name || !customer.age || !customer.cpf) {
                return customer
            }

            return {
                ...customer,
                cpf: customer.cpf.replace(/\D/g, "")
            }
        })
    }

    protected hook(): void {}

    protected abstract parseData(): Promise<CustomerData[]>
}
