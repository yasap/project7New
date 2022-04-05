const con = require("../database");

exports.createPost = function (userID,title,message,image){
    return new Promise((resolve,reject)=>{
        let time = new Date().getTime();
        con.query(
            `INSERT INTO post(author,title,content,image,date_created)
        VALUES('${userID}','${title}','${message}', '${image}', ${time})`, 
        (error, results) => {
            if (error) {
                reject("ooops , something went wrong");
                console.error("post.createPost(): ", error);
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