// Class Decorator that logs a message when a class is instantiated
function LogInstantiation(constructor: Function) {
    console.log(`Class ${constructor.name} was instantiated.`);
}

// Apply the decorator to the User class
@LogInstantiation
class User {
    constructor(public name: string) {
        console.log(`User ${this.name} created.`);
    }
}

// Create an instance of User
const user1 = new User("Alice");
