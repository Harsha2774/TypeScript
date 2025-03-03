// index.ts

// Define the Vehicle interface
interface Vehicle {
    startEngine(): void;
}

// Implement the Vehicle interface in the Car class
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to start the engine
    startEngine(): void {
        console.log(`Starting the engine of the ${this.year} ${this.make} ${this.model}.`);
    }
}

// Example usage
const car = new Car('Rollsroyes', 'bently', 2020);
car.startEngine();
