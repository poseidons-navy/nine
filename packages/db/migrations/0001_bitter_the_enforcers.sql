CREATE TABLE IF NOT EXISTS "payments" (
	"id" text PRIMARY KEY NOT NULL,
	"cid" text NOT NULL,
	"amount" integer NOT NULL,
	"timestamp" timestamp NOT NULL,
	"payer_address" text NOT NULL,
	"payee_address" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cid" (
	"id" text PRIMARY KEY NOT NULL,
	"cid" text NOT NULL,
	"timestamp" timestamp NOT NULL,
	"payer_adrress" text NOT NULL
);
