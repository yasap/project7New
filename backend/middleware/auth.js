const { json } = require('body-parser');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token == null) return res.status(401).json({ message: 'invalid token' })
  else {
    jwt.verify(token, 'Lorem_ipsum_dolor_sit_amet', (err, decodedToken) => {
      if (err) {
        res.status(401), json({ message: " thereis a problem with your token" });
      }
      else {
        next();
      }
    });
    
  }
}
