declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEON_CONN_STRING: string;
        }
    }
}

export {}
