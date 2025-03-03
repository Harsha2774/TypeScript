// index.ts
// Implement the Person interface in the Employee class
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    // Method to get employee details
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ID: ".concat(this.employeeId, ", Name: ").concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
// Example usage
var employee = new Employee('Alice', 30, 101);
console.log(employee.getEmployeeDetails());
