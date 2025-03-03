// index.ts

// Function to get user information
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is currently ${isActive ? 'active' : 'inactive'}.`;}

// Example usage
let userage: number = 30;
let userisActive: boolean = true;
console.log(getUserInfo(userage, userisActive));
