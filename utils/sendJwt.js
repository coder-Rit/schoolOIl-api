module.exports = (user, res, msg, statusCode,req) => {
  const Token = user.getJWTtoken();

  const options = {
    expire: new Date(
      Date.now() + process.env.COOKIE_EXPIER * 24 * 60 * 60 * 1000
    ),
    maxAge:new Date(
      Date.now() + process.env.COOKIE_EXPIER * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  
   
 
  res.status(statusCode).cookie("token", Token, options).json({
    msg: msg,
    user: user,
    Token: Token,
  });

   
  
};
