declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_CONN_STRING: string;
        }
    }
}

export {}
