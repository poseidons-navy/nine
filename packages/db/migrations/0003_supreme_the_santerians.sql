ALTER TABLE "payments" ADD PRIMARY KEY ("cid");--> statement-breakpoint
ALTER TABLE "Users" ADD COLUMN "clerk_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "payments" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "Users" ADD CONSTRAINT "Users_clerk_id_unique" UNIQUE("clerk_id");