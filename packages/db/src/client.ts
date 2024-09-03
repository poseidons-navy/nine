import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.NEON_CONN_STRING!);
const db = drizzle(sql);
export default db;
