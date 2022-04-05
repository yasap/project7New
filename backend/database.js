var mysql2 = require('mysql2');

// create connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groupmania_db',
  password: 'Studiare21'
});

//query 

db.on("error", (error) => {
  console.log(" can not connect" , error);

});
// console.log("successfully connected");

module.exports = db ;