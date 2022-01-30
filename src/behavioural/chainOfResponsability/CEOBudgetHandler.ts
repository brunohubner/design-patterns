import { BaseBudgetHandler } from "./BaseBudgetHandler"
import { CustomerBudget } from "./CustomerBudget"

export class CEOBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        console.log("O CEO aprovou o orçamento")
        budget.approved = true
        return budget
    }
}
