import express from 'express'
import {ExpenseController} from "./controller/ExpenseController";
import {initDatabasePool} from "./datasource";

const app = express()
app.use(express.json())

const expenseController = new ExpenseController();
app.post('/expense/', expenseController.postExpense)

export default app;

