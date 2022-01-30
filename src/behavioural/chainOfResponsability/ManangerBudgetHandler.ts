import { BaseBudgetHandler } from "./BaseBudgetHandler"
import { CustomerBudget } from "./CustomerBudget"

export class ManangerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total < 10000) {
            console.log("O Gerente aprovou o orçamento")
            budget.approved = true
            return budget
        }

        return super.handle(budget)
    }
}
