import {ExpenseService} from "./service/ExpenseService";
import {ExpenseController} from "./controller/ExpenseController";
import app from "./app";
import {initDatabasePool} from "./datasource";

const port = 3000
app.listen(port, async () => {
    await initDatabasePool();
    console.log(`serving on port ${port}`)
})
