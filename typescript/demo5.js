// index.ts
// Generic identity function
function identity(arg) {
    return arg;
}
// Calling the function with different types
var stringIdentity = identity('Hello, TypeScript!');
console.log('String identity:', stringIdentity);
var numberIdentity = identity(42);
console.log('Number identity:', numberIdentity);
