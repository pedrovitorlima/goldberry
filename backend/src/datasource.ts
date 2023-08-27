import {DataSource} from "typeorm";
import dotenv from "dotenv";
import {Expense} from "./domain/entities/Expense";

dotenv.config();

let connectDB: DataSource;

if (process.env.ENVIRONMENT === 'local') {
    connectDB = new DataSource({
        type: "sqlite",
        database: ":memory:",
        logging: false,
        synchronize: true,
        dropSchema: true,
        entities: [Expense],
    });
} else {
    connectDB = new DataSource({
        type: "postgres",
        url: process.env.DATABASE_URI,
        logging: false,
        synchronize: true,
        // entities: ["./src/domain/entities/**/*.ts"],
        entities: [Expense],
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
}

export async function initDatabasePool() {
    return connectDB
        .initialize()
        .then( async () => {
            console.log(`Data Source has been initialized`);
        })
        .catch((err) => {
            console.error(`Data Source initialization error`, err);
        })
}

export default connectDB;