const post = require("../model/post");
const con = require("../database");

var fs = require('fs');




exports.addPost = (req, res, next) => {

  //get the data from frontend
  // var data = JSON.parse(req.body);

const userID = req.body.userID;
const message = req.body.message;
const title = req.body.title;
  var image = "";
var url = req.protocol + "://" + req.get("host");
if (req.file) {
  image = url = "/image/"+ req.file.filename;
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
          error: error
        });
      }
    );
}
// //get data from db
exports.getPost = (req, res, next) => {
  con.query("SELECT * FROM post ",
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results)
      console.log('hi');
    })
}

// // post-read 
exports.readPost = (req, res, next) => {
  console.log(req.body.userID, req.body.post);
  const userID = req.body.userID;
  const postID = req.body.postID;
  post.addRead(userID, postID)
    .then(
      () => {
        console.log(userID, postID);
        res.status(201).json({
          message: 'Read post added successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      });

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
