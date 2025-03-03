// index.ts
// Function to get user information
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is currently ").concat(isActive ? 'active' : 'inactive', ".");
}
// Example usage
var userage = 30;
var userisActive = true;
console.log(getUserInfo(userage, userisActive));
