const express = require("express");
const mysql      = require('mysql');
const db = mysql.createConnection({})

const bodyParser = require("body-parser");
const userRoutes = require("./router/user")


const path = require('path');
const cors = require('cors')
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/auth', userRoutes);
module.exports=app;