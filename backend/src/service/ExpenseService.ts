import {Expense} from "../domain/entities/Expense";
import {ValidationError} from "../domain/validation/ValidationError";
import connectDB from "../datasource";
import ConnectDb from "../datasource";

export class ExpenseService {

    async save(expense: Expense): Promise<void> {
        const validationErrors = new Array<Record<string, string>>();
        if (expense.value == 0) {
            const emptyExpenseError: Record<string, string> = { "value": "cannot be empty" }
            validationErrors.push(emptyExpenseError);
        }

        if (validationErrors.length != 0) {
            throw new ValidationError(validationErrors);
        }

        await connectDB.getRepository(Expense).save(expense);
    }
}