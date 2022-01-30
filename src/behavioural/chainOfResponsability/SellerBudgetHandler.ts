import { BaseBudgetHandler } from "./BaseBudgetHandler"
import { CustomerBudget } from "./CustomerBudget"

export class SellerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.total < 1000) {
            console.log("O Vendedor aprovou o orçamento")
            budget.approved = true
            return budget
        }

        return super.handle(budget)
    }
}
