import mongoose from "mongoose";
import { connectToDatabase } from "./database/index.js"; // Import the database connection function
import { reportModel } from "./models/index.js";

import jsonData from "./jsondata.json" assert { type: "json" };



// Connect to MongoDB
connectToDatabase();

// Function to seed data from JSON
const seedData = async () => {
  try {
    // Delete existing documents from the collection to avoid duplicates
    await reportModel.deleteMany({});

    // Insert the JSON data into the collection
    await reportModel.insertMany(jsonData);

    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the MongoDB connection after seeding
    mongoose.connection.close();
  }
};

// Call the seedData function to start seeding
seedData();
