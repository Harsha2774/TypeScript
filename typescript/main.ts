// Import the module from the declaration file
import { AppConfig, initializeApp } from "example.d";

// Define an AppConfig object
const config: AppConfig = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};

// Call the initializeApp function
initializeApp(config);

console.log("App initialized successfully!");
