const post = require("../model/post");
const con = require("../database");

var fs = require('fs');




exports.addPost = (req, res, next) => {


const userID = req.body.userID;
const message = req.body.message;
const title = req.body.title;
  var image = "";
var url = req.protocol + "://" + req.get("host");
if (req.file) {
  image = url + "/images/"+ req.file.filename;
}
  //console.log(userID,message,image);
  post.createPost(userID, title, message, image)
    .then(
      () => {
        res.status(201).json({
          message: 'New post added to database successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          message: "error occurred"
        });
      }
    );
}
// //get data from db
exports.getAllPost = (req, res, next) => {
  con.query("SELECT * FROM post order by date_created desc",
    (error, results) => {
      if (error) {
        res.status(200).json({
          message: "something went wrong"
        });
        
      }
      else res.status(200).json(results);
    })
};

// // post-read 
exports.getPost = (req, res, next) => {
  const postID = req.params.id;
  post.getSinglePost(postID)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      }
      else {
        res.status(200).json({ message: "No records found" });
      }
    })
  .catch(
      (error) => {
        res.status(500).json({
          message: error.message,
        });
      }
    );
}
 
exports.getReadPost = (req, res, next) => {
  const userID = req.params.id
  con.query('SELECT * FROM readPost WHERE userID =' + userID,

    (error, results) => {
      if (error) {
        res.status(500).json(error.message)
      }

      res.status(200).json(results)

    })

};
exports.readPost = (req, res, next) => {
  const userID = req.body.userid;
  const postID = req.body.postid;
  con.query('DELETE FROM readPost WHERE id=?;',[userID],)
}