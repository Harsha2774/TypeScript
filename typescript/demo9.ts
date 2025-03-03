// Arrow function to sum all numbers in an array
const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Example usage:
console.log(sum([1, 2, 3, 4, 5]));  // Output: 15
console.log(sum([10, 20, 30]));     // Output: 60
console.log(sum([]));               // Output: 0
