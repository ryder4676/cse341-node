const express = require('express');
const app = express();
const professionalData = require("./professionalData.json");
const {MongoClient} = require("mongodb");
const cors = require('cors'); // Import the cors module
const port = 8080;


// async function main(){
//   const username = process.env.MONGODB_USERNAME;
//   const password = process.env.MONGODB_PASSWORD;

// Enable CORS for all routes
app.use(cors());

// Define a route to serve professional data
app.get('/professional', (req, res) => {
  res.json(professionalData);
});
// console.log('Data received from API:', professionalData);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

