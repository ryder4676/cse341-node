const { MongoClient } = require("mongodb");

// Function to retrieve all data from the MongoDB collection
async function GetAll(req, res) {
    // Create a new MongoDB client using the URI from environment variables
    const client = new MongoClient(process.env.URI);

    // Establish a connection to the MongoDB server
    await client.connect();

    // Access the "professionalData" database and the "Ryder" collection
    const database = await client.db("professionalData").collection("Ryder");

    // Retrieve all documents from the collection and store them in a cursor
    const cursor = database.find();

    // Convert the cursor results to an array of JSON objects
    const jsonDatabase = await cursor.toArray();

    // Log the retrieved data to the console for debugging
    console.log(jsonDatabase);

    // Respond to the client with the first JSON object from the array
    res.json(jsonDatabase[0]);

    // Close the MongoDB client (You can uncomment this if necessary)
    // await client.close();
}

// Export the GetAll function to make it accessible in other modules
module.exports = { GetAll };
