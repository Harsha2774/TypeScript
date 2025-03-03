// Function to divide numbers with error handling
function divideNumbers(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

// Test Cases
try {
    console.log("Result:", divideNumbers(10, 2)); // Expected: 5
    console.log("Result:", divideNumbers(5, 0)); // Expected: Error
} catch (error) {
    console.error("Error:", error.message);
}
