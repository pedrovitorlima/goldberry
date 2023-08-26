import {Expense} from "../domain/Expense";
import {Repository} from "typeorm";
import {ValidationError} from "../domain/validation/ValidationError";

export class ExpenseService {

    constructor(private expenseRepository: Repository<Expense>) { }
    async save(expense: Expense): Promise<void> {
        const validationErrors = new Array<Record<string, string>>();
        if (expense.value == 0) {
            const emptyExpenseError: Record<string, string> = { "value": "cannot be empty" }
            validationErrors.push(emptyExpenseError);
        }

        if (validationErrors.length != 0) {
            throw new ValidationError(validationErrors);
        }

        await this.expenseRepository.save(expense);
    }
}