import { PostHog } from "posthog-node";
import dotenv from 'dotenv';
dotenv.config();
console.log("Posthog incoming",process.env.POSTHOG_HOST);
console.log("Posthog shit",process.env.POSTHOG_API_KEY);
const client = new PostHog(
    process.env.POSTHOG_API_KEY!,
    {
        host: process.env.POSTHOG_HOST!,
    },
);

export default client;