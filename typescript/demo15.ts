// Property Decorator to validate email format
function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newEmail: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            throw new Error(`Invalid email format: ${newEmail}`);
        }
        value = newEmail;
    };

    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}

// User class with email validation
class demo15 {
    
    public email: string;

    constructor(email: string) {
        this.email = email;
    }
}

// Test Cases
try {
    const user1 = new User("alice@example.com");
    console.log(`User created with email: ${user1.email}`);
    
    const user2 = new User("invalid-email"); // This will throw an error
} catch (error) {
    console.error(error.message);
}
