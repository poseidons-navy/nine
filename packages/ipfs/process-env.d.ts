declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PINARA_KEY: string;
            PINATA_GATEWAY: string
        }
    }
}

export {}
