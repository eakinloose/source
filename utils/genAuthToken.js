const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
   const secretkey = process.env.JWT_SECRETKEY;
   const token = jwt.sign(
      {
         _id: user._id,
         name: user.name,
         email: user.email,
         occupation: user.occupation,
         password: user.password,
      },
      secretkey
   );
   return token;
};

module.exports = genAuthToken;
