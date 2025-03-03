// Arrow function to sum all numbers in an array
var sum = function (numbers) { return numbers.reduce(function (acc, num) { return acc + num; }, 0); };
// Example usage:
console.log(sum([1, 2, 3, 4, 5])); // Output: 15
console.log(sum([10, 20, 30])); // Output: 60
console.log(sum([])); // Output: 0
