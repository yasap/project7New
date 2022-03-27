const express = require("express");
const mysql      = require('mysql');
const db = mysql.createConnection({})

const bodyParser = require("body-parser");
const userRoutes = require("./router/user")
const postRoutes = require('./router/post');

const path = require('path');
const cors = require('cors');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/post',postRoutes)
module.exports=app;