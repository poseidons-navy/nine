import { LooseAuthProp } from "@clerk/clerk-sdk-node";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            NEXT_PUBLIC_NINE_ADMIN_PRIVATE_KEY: string
            NEON_CONN_STRING: string;
            WEBHOOK_SECRET: string;
            CLERK_PUBLISHABLE_KEY: string;
            CLERK_SECRET_KEY: string;
            EXPO_ACCESS_TOKEN: string;
        }
    }
    namespace Express {
        interface Request extends LooseAuthProp {}
    }
}

export {}
