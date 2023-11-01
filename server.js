const express = require('express');
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Jayson Ronald");
});

const port = 3000;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// app.listen(process.env.PORT || port, () => {
//     console.log('Web Server is listening at port ' + (process.env.PORT || port));
// });
app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening at port ${process.env.PORT || port}`);
});
