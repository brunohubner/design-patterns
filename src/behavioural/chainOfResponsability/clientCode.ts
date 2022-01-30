import { CEOBudgetHandler } from "./CEOBudgetHandler"
import { CustomerBudget } from "./CustomerBudget"
import { DirectorBudgetHandler } from "./DirectorBudgetMananger"
import { ManangerBudgetHandler } from "./ManangerBudgetHandler"
import { SellerBudgetHandler } from "./SellerBudgetHandler"

const customerBudget = new CustomerBudget(10000)

const seller = new SellerBudgetHandler()
seller
    .setNextHandler(new ManangerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler())

seller.handle(customerBudget)
console.log(customerBudget)
