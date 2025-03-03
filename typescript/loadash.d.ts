// Declare Lodash module with basic type definition
declare module "lodash" {
    export function chunk<T>(array: T[], size: number): T[][];
}
