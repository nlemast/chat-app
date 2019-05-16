const User = require('./userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  User.create({
    username: req.body.username
  }),
    (err, user) => {
      if (err) console.error(err);
      else {
        res.send(user);
        res.end();
      }
    };
};

module.exports = userController;
