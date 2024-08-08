import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    dialect: "postgresql",
    schema: "./schema/index.ts",
    out: "./migrations",
    dbCredentials: {
        url: process.env.PG_CONNECTION_STRING!,
    },
} satisfies Config;