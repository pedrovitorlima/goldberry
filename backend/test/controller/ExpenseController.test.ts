import {Expense} from "../../src/domain/entities/Expense";
import request from 'supertest';
import app from '../../src/app'
import {initDatabasePool} from "../../src/datasource";

describe('The Expense controller', () => {

    beforeEach(async () => {
        await initDatabasePool();
    });

    it('POST /expense/', async () => {
        const expense = new Expense(0, 20.01, "expense");

        const response = await request(app)
            .post("/expense/")
            .send(expense);

        expect(response.status).toBe(200);
    });
});