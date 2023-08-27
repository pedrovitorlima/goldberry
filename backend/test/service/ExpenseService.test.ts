import {Expense} from "../../src/domain/entities/Expense";
import {ExpenseService} from "../../src/service/ExpenseService";
import {Repository} from "typeorm";
import {deepEqual, instance, mock, verify, when} from "ts-mockito";
import {ValidationError} from "../../src/domain/validation/ValidationError";
import connectDB from "../../src/datasource";
import {jest} from '@jest/globals'

jest.mock('../../src/datasource', () => ({
    getRepository: jest.fn(),
}));

describe('The Expense Service', () => {

    const expenseRepository = mock<Repository<Expense>>();
    const expenseService = new ExpenseService();

    beforeEach(() => {
        const connectDBMock = connectDB as jest.Mocked<typeof connectDB>;
        connectDBMock.getRepository.mockReturnValue(instance(expenseRepository));
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