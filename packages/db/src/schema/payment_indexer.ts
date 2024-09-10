import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
export const paymentEvents = pgTable("payments", {
    cid: text("cid").notNull().primaryKey(),
    amount: integer("amount").notNull(),
    timestamp: timestamp("timestamp").notNull(),
    payer_address: text("payer_address").notNull(),
    payee_address: text("payee_address").notNull(),
});