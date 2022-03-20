const bcrypt = require('bcrypt');
const con = require('../database');


exports.createUser = function (firstName,lastName,userEmail,password){
    return new Promise((resolve,reject)=>{
       con.query(`INSERT INTO users(  firstName, email, password, lastName)
       VALUES('${firstName}', '${userEmail}','${password}', '${lastName}')` ,
        (error, results) => {
          if (error) {
            console.log("HI");
              reject (error)
            }
            resolve(results)
          
          })
    })    
}
// exports.editUser = function (firstName,lastName,userEmail,password,userID){
//   return new Promise((resolve,reject)=>{
//     con.query("UPDATE users SET firstName=?,lastName=?, email= ?, password= ? WHERE userID = ?",
//     [firstName,lastName,userEmail,password,userID],
//     (error, results) => {
//       if (error) {
//         reject (error)
//       }
//       resolve(results)
    
//     }
//     )
//   })
// }

// exports.removeUser = function (userID){
//   return new Promise((resolve,reject)=>{
//     con.query("DELETE FROM users WHERE id=?;",
//     [userID],
//     (error, results) => {
//       if (error) {
//         reject (error)
//       }
//       resolve(results)
    
//     }
//     )
//   })
// }