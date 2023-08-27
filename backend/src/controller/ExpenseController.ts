import { Request, Response } from 'express';
import {Expense} from "../domain/entities/Expense";
import {ExpenseService} from "../service/ExpenseService";
import {ValidationError} from "../domain/validation/ValidationError";

export class ExpenseController {

    async postExpense(req: Request, res: Response) {
        const expenseService = new ExpenseService();

        if (!req.body) {
            return res.sendStatus(400);
        }

        const body = req.body as Expense;

        try {
            await expenseService.save(body);
            return res.sendStatus(200);
        } catch (error) {
            if (error instanceof ValidationError) {
                const validationError = error as ValidationError;
                return res.sendStatus(400).json(validationError);
            }
            console.error(error);
            return res.sendStatus(500);
        }

    }
}