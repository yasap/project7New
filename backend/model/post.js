const con = require("../database");

exports.createPost = function (userID,message,image){
    return new Promise((resolve,reject)=>{
        
        con.query(
            `INSERT INTO post(author,content,image)
        VALUES('${userID}','${message}', '${image}')`, 
        (error, results) => {
            if (error) {
                reject (error)
              }
              resolve(results)
              console.log(results);
        })
    });
}

// exports.addRead = function (userID,postID){
//     return new Promise((resolve,reject)=>{
//         console.log(userID, postID);
//         con.query(
//             `INSERT INTO readPost (postID,userID) VALUES ('${postID}','${userID}')`, 
//         (error, results) => {
//             if (error) {
//                 reject (error)
//               }
//               resolve(results)
//               console.log(results);
//         })
//     });
// }