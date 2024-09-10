ALTER TABLE "payments" ALTER COLUMN "timestamp" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "cid" ALTER COLUMN "timestamp" SET DEFAULT now();