declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GRPC_PORT: string;
            PG_CONNECTION_STRING: string;
            POSTHOG_API_KEY: string;
            POSTHOG_HOST: string;
            MODULE_ADDRESS: string;
        }
    }
}

export {}