"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the module from the declaration file
var example_d_1 = require("example.d");
// Define an AppConfig object
var config = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};
// Call the initializeApp function
(0, example_d_1.initializeApp)(config);
console.log("App initialized successfully!");
