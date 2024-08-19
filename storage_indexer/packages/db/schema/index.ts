import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
export const cidEvents = pgTable("cid", {
    id: text("id").notNull().primaryKey(),
    cid: text("cid").notNull(),
    timestamp: timestamp("timestamp").notNull(),
    payer_address: text("payer_adrress").notNull(),
});