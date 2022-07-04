const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

const table = require('./bdd/Table');


// Create a connection to the database
const connection = mysql.createConnection({
  host: 'b9tlqacdujuxgov0wpvw-mysql.services.clever-cloud.com',
  user: 'ukncjptfkabqxoxa',
  password: 'BjELQsTxGGQdMgnqTVe6',
  database: "b9tlqacdujuxgov0wpvw"        
});
  
// open the MySQL connection
connection.connect(error => {
    if (error){
        console.log("A error has been occured "
            + "while connecting to database.");        
        throw error;
    }
      
    //If Everything goes correct, Then start Express Server
    app.listen(PORT, ()=>{
        console.log("Database connection is Ready and "
             + "Server is Listening on Port ", PORT);
    })
});

app.use(express.static(path.join(__dirname, 'build')))
             
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});