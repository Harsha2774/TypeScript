// Function to parse JSON with error handling
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}
// Test Cases
var validJson = '{"name": "Alice", "age": 25}';
var invalidJson = '{name: Alice, age: 25}'; // Invalid JSON format
console.log("Parsed valid JSON:", parseJson(validJson)); // Should print the object
console.log("Parsed invalid JSON:", parseJson(invalidJson)); // Should print null
