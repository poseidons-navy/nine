import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
export const cidEvents = pgTable("payments", {
    id: text("id").notNull().primaryKey(),
    cid: text("cid").notNull(),
    amount: integer("amount").notNull(),
    timestamp: timestamp("timestamp").notNull(),
    payer_address: text("payer_address").notNull(),
    payee_address: text("payee_address").notNull(),
});