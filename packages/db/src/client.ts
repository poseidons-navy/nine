import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import "dotenv/config";

const queryClient = postgres(process.env.POSTGRES_CONN_STRING);
const db = drizzle(queryClient);
export default db;
