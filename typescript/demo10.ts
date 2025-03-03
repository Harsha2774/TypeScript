export function add(a: number, b: number): number {
    return a + b;
}
import { Add } from "./demo10"; // Import the add function

const result = Add(10, 5); // Call the function
console.log(`The sum is: ${result}`);  // Output: The sum is: 15
