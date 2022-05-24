const con = require("../database");

exports.createPost = function (userID,title,message,image){
    return new Promise((resolve,reject)=>{
        let time = new Date().getTime();
        var values = [[userID, title, message, image, time]];
        con.query(
            "INSERT INTO post(author,title,content,image,date_created) VALUES ?", [values],
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

exports.getSinglePost= function (postID){
    return new Promise((resolve,reject)=>{
        console.log(postID);
        con.query(
            // "SELECT *  FROM post WHERE post_id = ?", [postID] ,
            "SELECT p.*,u.firstname,u.lastname FROM post AS p INNER JOIN users AS u on p.author=u.id WHERE p.post_id = ?", [postID],
        (error, results) => { 
            if (error) {
                reject ("OOPS, something went wrong: can't open this post")
              }
              resolve(results[0])
              console.log(results);
        })
    });
}