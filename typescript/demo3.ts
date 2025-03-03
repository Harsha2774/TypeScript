// index.ts

// Define the Person interface
interface Person {
    name: string;
    age: number;
}

// Implement the Person interface in the Employee class
class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    // Method to get employee details
    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

// Example usage
const employee = new Employee('Alice', 30, 101);
console.log(employee.getEmployeeDetails());
