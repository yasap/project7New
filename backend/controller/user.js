const bcrypt = require('bcrypt');
const userFunc = require("../model/user");
const con = require("../database");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  //get the data from frontend
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  let hashedPassword = "";
  console.log("email check", userEmail);
  //hash password
  

  //check the email

  con.query(
    "SELECT email FROM users WHERE email  =?", [userEmail],
    (err, results) => {
      if (err) {
        console.log("this is my error:", err);
        res.status(500).json({
          message: err
        })
      }
      if (results.length != 0) {
        res.status(403).json({
          'Message': "Already exists"
        })
      }
      //email is not exists create the new user and add to DB
      else {
        bcrypt.hash(password, 10, (err, result) => {
          if (err) {
           res.status(500).json({ "Error": err })
          }
          else {
           
            hashedPassword = result;
            userFunc.createUser(firstName, lastName, userEmail, hashedPassword)
              .then(
                () => {
                  res.status(201).json({
                    message: 'User added successfully!'
                  });
                }
              ).catch(
                (error) => {
                  res.status(500).json({
                    error: error
                  });
                });
          }
        });
      }
    })
};

exports.login = (req, res, fields) => {
  const userEmail = req.body.userEmail;
  const password = req.body.password;

  con.query(
    'SELECT * FROM users WHERE email = ?', [userEmail],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Ooops" })
      }
      if (results.length > 0) {
        console.log(" check3" , results);
        bcrypt.compare(password, results[0].password).then(
          (valid) => {
            if (!valid) {
              res.status(401).json({
                error: 'Incorrect password!'
              });
            }
            else{
            const token = jwt.sign(
              { userID: results[0].id },
              'Lorem_ipsum_dolor_sit_amet',
              { expiresIn: '24h' }
            );

           res.status(200).json({
                userID: results[0].id,
                token: token,
                firstName: results[0].firstName,
             lastName: results[0].lastName,
                email: results[0].email
              });
            }
          }
        )
          .catch(
            (error) => {
              res.status(500).json({
                error: error
              })
            }
          );
      }
      else{
        res.status(500).json({'error' : "User Email not found"})
      }
    })
}

exports.updateUser=(req,res,next)=>{
const userID =res.body.userID;
const userEmail =res.body.userEmail;
const password =res.body.password;
console.log(userID,userEmail,password);
con.query(
  "SELECT userEmail FROM userDB WHERE userID = '" + userId + "'",
  (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length === 0) {
      res.status(404).json({ 'message': "User Email not found" })
    }else{
      bcrypt.hash(password, 10, (err, result) => {
        if (err) {
          return res.status(500).json({ "Error": err })
        }
        else {
          hashedPassword = result;
          console.log(hashedPassword);
          userFunc.editUser( userEmail, hashedPassword,userID)
            .then(
              () => {
                res.status(201).json({
                  message: 'User added successfully!'
                });
              }
            ).catch(
              (error) => {
                res.status(500).json({
                  error: error
                });
              });
        }
      });
    }
       })
}

exports.updateUser=(req,res,next)=>{
   const userID =req.body.userID
   const firstName = req.body.firstName
  const lastName = req.body.lastName
   const userEmail=req.body.userEmail
   const password=req.body.password
   con.query(
    "SELECT userEmail FROM userDB WHERE userID = '" + userID + "'",
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length === 0) {
        res.status(404).json({ 'message': "User not found" })
      }else{
        {
          bcrypt.hash(password, 10, (err, result) => {
            if (err) {
              return res.status(500).json({ "Error": err })
            }
            else {
              console.log(result);
              hashedPassword = result;
             
              userFunc.editUser( firstName,lastName,userEmail,hashedPassword,userID)
                .then(
                  () => {
                    res.status(201).json({
                      message: 'User update successfully!'
                    });
                  }
                ).catch(
                  (error) => {
                    res.status(500).json({
                      error: error
                    });
                  });
            }
          });
        }
        
      }
    }
    )
}
exports.deleteUser=(req,res,next)=>{
  const userID =req.params.id
        userFunc.removeUser(userID)
        .then(
          () => {
            res.status(201).json({
              message: 'User delete successfully!'
            });
          }
        ).catch(
          (error) => {
            console.log(error);
            res.status(200).json({
              error: 'can not delete User'
            });
          });
      }
