// index.ts
// Implement the Vehicle interface in the Car class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to start the engine
    Car.prototype.startEngine = function () {
        console.log("Starting the engine of the ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    };
    return Car;
}());
// Example usage
var car = new Car('Rollsroyes', 'bently', 2020);
car.startEngine();
