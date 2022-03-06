// const post = require("../module/post");
// const con = require("../database");
// var fs = require('fs');

// exports.addPost = (req, res, next) => {

//   //get the data from frontend
//   const userID = req.body.userID
//   const message = req.body.message
//   var s2 = undefined;
//   if(req.file && req.file.path) {
//      s2 = req.file.path.substring(7);
//   }
//  const image = s2
//   //console.log(userID,message,image);
//   post.createPost(userID, message, image)
//     .then(
//       () => {
//         res.status(201).json({
//           message: 'New post added to database successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(500).json({
//           error: error
//         });
//       }
//     );
// }
// //get data from db
// exports.getPost = (req, res, next) => {
//   con.query("SELECT * FROM postDB ",
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).json(results)
//       console.log('hi');
//     })

// };
// // post-read 
// exports.readPost = (req, res, next) => {
//   console.log(req.body.userID, req.body.postID);
//   const userID = req.body.userID;
//   const postID = req.body.postID;
//   post.addRead(userID, postID)
//     .then(
//       () => {
//         console.log(userID, postID);
//         res.status(201).json({
//           message: 'Read post added successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(500).json({
//           error: error
//         });
//       });

// }
// exports.getReadPost = (req, res, next) => {
//   const userID = req.params.id
//   con.query('SELECT * FROM readPost WHERE userID =' + userID,

//     (error, results) => {
//       if (error) {
//         res.status(500).json(error.message)
//       }

//       res.status(200).json(results)

//     })

// };