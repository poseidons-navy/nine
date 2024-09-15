import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    dialect: 'postgresql',
    schema: "./src/schema/index.ts",
    out: "./migrations",
    dbCredentials: {
        url: process.env.NEON_CONN_STRING || "postgresql://nine_owner:Ez2yitx9jlbT@ep-restless-poetry-a2957ipe.eu-central-1.aws.neon.tech/nine?sslmode=require"
    }
});
