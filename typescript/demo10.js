"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(a, b) {
    return a + b;
}
var demo10_1 = require("./demo10"); // Import the add function
var result = (0, demo10_1.Add)(10, 5); // Call the function
console.log("The sum is: ".concat(result)); // Output: The sum is: 15
