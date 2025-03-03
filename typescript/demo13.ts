// Import Lodash
import { chunk } from "lodash";

// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Split the array into chunks of size 3
const chunkedArray = chunk(numbers, 3);

console.log("Chunked Array:", chunkedArray);
