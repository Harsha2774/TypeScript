// Property Decorator to validate email format
function ValidateEmail(target, propertyKey) {
    var value;
    var getter = function () { return value; };
    var setter = function (newEmail) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            throw new Error("Invalid email format: ".concat(newEmail));
        }
        value = newEmail;
    };
    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}
// User class with email validation
var demo15 = /** @class */ (function () {
    function demo15(email) {
        this.email = email;
    }
    return demo15;
}());
// Test Cases
try {
    var user1 = new User("alice@example.com");
    console.log("User created with email: ".concat(user1.email));
    var user2 = new User("invalid-email"); // This will throw an error
}
catch (error) {
    console.error(error.message);
}
