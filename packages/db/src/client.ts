import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.NEON_CONN_STRING || "postgresql://nine_owner:Ez2yitx9jlbT@ep-restless-poetry-a2957ipe.eu-central-1.aws.neon.tech/nine?sslmode=require");
const db = drizzle(sql);
export default db;