
// const jwt = require('jsonwebtoken');
// require('env2')('./config.env');
//
// const secret = process.env.SECRET;
// console.log('first');
//
//
// module.exports = (req, res, next) => {
//   const cookies = req.cookies ? (req.cookies) : {};
//   if (cookies.user) {
//     jwt.verify(cookies.user, secret, (err, decoded) => {
//       if (err) {
//         res.render('error');
//         next();
//       }
//       req.userName = decoded.userName;
//       req.userId = decoded.userId;
//       next();
//     });
//   } else {
//     res.redirect('/login');
//   }
// };
