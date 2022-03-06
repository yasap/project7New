var mysql2 = require('mysql2');

// create connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groupmania_db',
  password: 'Studiare21'
});

// connect
db.connect(() => {
  if (error) {
    throw err;
  }
  console.log("MySQL connected")
});

module.exports = con ;