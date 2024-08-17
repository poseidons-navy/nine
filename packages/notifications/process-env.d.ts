declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPO_ACCESS_TOKEN: string
        }
    }
}

export {}
