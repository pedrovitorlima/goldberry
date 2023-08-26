import {Expense} from "../../src/domain/Expense";
import {ExpenseService} from "../../src/service/ExpenseService";
import {Repository} from "typeorm";
import {deepEqual, instance, mock, verify} from "ts-mockito";
import {ValidationError} from "../../src/domain/validation/ValidationError";

describe('The Expense Service', () => {

    let expenseService: ExpenseService;
    let expenseRepository: Repository<Expense>;

    beforeEach(() => {
        expenseRepository = mock<Repository<Expense>>();
        expenseService = new ExpenseService(instance(expenseRepository));
    })

    it('should call the repository given a valid Expense', async () => {
        const expense = new Expense(0, 10.0, "groceries")
        await expenseService.save(expense);

        verify(expenseRepository.save(deepEqual(expense))).called();
    });

    it('should throw an error with the validation messages given an invalid Expense', async () => {
        const expense = new Expense(0, 0, "groceries");

        const error: Record<string, string> = {
            "value": "cannot be empty"
        }

        const validationError = new ValidationError([error])

        await expect(expenseService.save(expense)).rejects.toThrowError(validationError);

    });
})