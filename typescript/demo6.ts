// Define enum
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

// Function to return the color name
function getColorName(color: Color): string {
    return `Selected Color: ${color}`;
}

// Example usage
console.log(getColorName(Color.Red));   // Output: Selected Color: Red
console.log(getColorName(Color.Green)); // Output: Selected Color: Green
console.log(getColorName(Color.Blue));  // Output: Selected Color: Blue
