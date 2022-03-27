const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, 'Lorem_ipsum_dolor_sit_amet');
    console.log(decodedToken);
    const userID = decodedToken.userId;
    
    if (req.headers.userID !== userID) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};