// const bcrypt = require('bcrypt');
// const con = require('../database')


// exports.createUser = function (firstName,lastName,userEmail,password){
//     return new Promise((resolve,reject)=>{
//        con.query(`INSERT INTO userDB(  firstName, lastName, userEmail,userPassword)
//        VALUES('${firstName}', '${lastName}', '${userEmail}','${password}')` ,
//         (error, results) => {
//             if (error) {
//               reject (error)
//             }
//             resolve(results)
          
//           })
//     })    
// }
// exports.editUser = function (firstName,lastName,userEmail,password,userID){
//   return new Promise((resolve,reject)=>{
//     con.query("UPDATE userDB SET firstName=?,lastName=?, userEmail= ?, userPassword= ? WHERE userID = ?",
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
//     con.query("DELETE FROM userDB WHERE userID=?;",
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