const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors module
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();

// const professionalData = require("./professionalData.json");
const {MongoClient} = require("mongodb");

async function main(){
  /* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details */
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const uri = `mongodb+srv://${username}:${password}@cluster4676.pzplknn.mongodb.net`;

  const client = new MongoClient(uri);
  await client.connect();
  await listDatabases(client);
  try{
    await client.connect();
    await listDatabases(client);
    
  }catch (e){
    console.log(e);
  }finally {
    await client.close();
  }
 
  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
  // Enable CORS for all routes
  app.use(cors());

  // Define a route to serve professional data
  // app.get('/professional', (req, res) => {
  //   res.json(professionalData);
  // });
  // console.log('Data received from API:', professionalData);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

}

main().catch(console.error);