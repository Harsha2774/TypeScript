// index.ts

// Generic identity function
function identity<T>(arg: T): T {
    return arg;
}

// Calling the function with different types
const stringIdentity = identity<string>('Hello, TypeScript!');
console.log('String identity:', stringIdentity);

const numberIdentity = identity<number>(42);
console.log('Number identity:', numberIdentity);
