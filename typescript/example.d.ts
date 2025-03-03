// Declare the SomeLibrary module
declare module "example.d" {
    export interface AppConfig {
        apiUrl: string;
        retryCount: number;
    }

    export function initializeApp(config: AppConfig): void;
}
