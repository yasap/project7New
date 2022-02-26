const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groupmania'
});

// connect
db.connect(() => {
  if (error) {
    throw err;
  }
  console.log("MySql connected")
});


const path = require('path');
const cors = require('cors')
const app = express();

// create DB
app.get("/createdb, (req, res")


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
module.exports=app;