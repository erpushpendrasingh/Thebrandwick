const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
     const token = req.headers.authorization;
     console.log("token:", token);
     if (token) {
          const decoded = jwt.verify(token, "masai");
          if (decoded) {
               const userID = decoded.userID;
               console.log(decoded);
               req.body.userID = userID;
               next();
          } else {
               res.send({ msg: "Please Login First" });
          }
     } else {
          res.send({ msg: "Please Login First" });
     }
};

module.exports = {
     authenticate,
};