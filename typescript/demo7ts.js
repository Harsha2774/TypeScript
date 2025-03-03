function printDetails(value) {
    if (typeof value === "string" || typeof value === "number") {
        console.log("Type: ".concat(typeof value, ", Value: ").concat(value));
    }
    else {
        console.log("Invalid input! Only strings and numbers are allowed.");
    }
}
// Testing
printDetails(42); // Output: Type: number, Value: 42
printDetails("Hello"); // Output: Type: string, Value: Hello
printDetails(true); // Output: Invalid input! Only strings and numbers are allowed.
