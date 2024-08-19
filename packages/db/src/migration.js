import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import "dotenv/config";

const migrationClient = postgres(process.env.POSTGRES_CONN_STRING, { max: 1 });
(async function main() {
    try {
        await migrate(drizzle(migrationClient), {
            migrationsFolder: "./migrations"
        })
        console.log("Migrations complete");
    } catch(err) {
        console.log("Error Migrating", err);
    }
})()
