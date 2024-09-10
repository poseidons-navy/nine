declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            NEXT_PUBLIC_NINE_ADMIN_PRIVATE_KEY: string
            NEON_CONN_STRING: string;
        }
    }
}

export {}
