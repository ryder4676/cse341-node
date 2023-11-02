const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors module
const port = 8080;
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from a .env file

// Import the MongoClient from the MongoDB driver
const { MongoClient } = require("mongodb");

async function main() {
  // Log the MongoDB connection URI retrieved from environment variables
  console.log(process.env.URI);

  // Create a new MongoDB client instance using the provided connection URI
  const client = new MongoClient(process.env.URI, {ssl: true, 
  sslValidate: true});

  // Establish a connection to the MongoDB server
  await client.connect();

  // List the available databases on the connected MongoDB server
  await listDatabases(client);

  try {
    // Additional logic or error handling can be added here

  } catch (e) {
    console.log(e); // Log any errors that occur

  } finally {
    // Ensure the MongoDB client is closed when no longer needed
    await client.close();
  }

  // Define a function to list available databases on the MongoDB server
  async function listDatabases(client) {
    // Retrieve a list of databases from the MongoDB server
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    // Log the names of the available databases
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  }

  // Enable CORS for all routes in the Express app
  app.use(cors());

  // Define a route to serve professional data (code is commented out)
  // app.get('/professional', (req, res) => {
  //   res.json(professionalData);
  // });

  // Use routes defined in a separate module
  app.use("/", require("./routes"));

  // Start the Express app and listen on the specified port
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Call the main function to start the application and catch any errors
main().catch(console.error);
