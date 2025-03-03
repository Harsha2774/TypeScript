// Define a namespace Geometry
namespace Geometry {
    export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }
}

// Use the namespace to calculate the area of a circle
const radius = 5;
const area = Geometry.calculateArea(radius);
console.log(`The area of the circle is: ${area.toFixed(2)}`);
