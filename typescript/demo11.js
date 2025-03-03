// Define a namespace Geometry
var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
// Use the namespace to calculate the area of a circle
var radius = 5;
var area = Geometry.calculateArea(radius);
console.log("The area of the circle is: ".concat(area.toFixed(2)));
