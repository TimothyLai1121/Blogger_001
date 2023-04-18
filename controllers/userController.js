const db = require("../models/user");
// bcrypt is a library that allows us to hash passwords //
// hash is a one way encryption that makes it impossible to decrypt //
const bcrypt = require("bcryptjs");

module.exports = {
  signup: function(req, res) { // signup is a method that creates a new user //
    const { username, email, password } = req.body; // req.body is the data that is sent to the server //
    db.User.findOne({ where: { email: email } }).then(user => { // findOne is a method that finds a user by their email //
      if (user) {
        return res.status(400).json({ msg: "Email already exists" }); // 400 is a bad request or email already exists //
      }
      bcrypt.genSalt(10, (err, salt) => { // genSalt is a method that generates a salt //
        bcrypt.hash(password, salt, (err, hash) => { // 
          if (err) throw err;
          db.User.create({
            username: username,
            email: email,
            password: hash
          })
            .then(user => {
              res.json({
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email
                }
              });
            })
            .catch(err => {
              console.error(err.message);
              res.status(500).send("Server error");
            });
        });
      });
    });
  },
  login: function(req, res) { // login is a method that logs in a user //
    const { email, password } = req.body;
    db.User.findOne({ where: { email: email } }).then(user => {
      if (!user) {
        return res.status(400).json({ msg: "Email not found" });
      }
      bcrypt.compare(password, user.password).then(isMatch => { // compare is a method that compares the password with the hash //
        if (!isMatch) {
          return res.status(400).json({ msg: "Invalid password" });
        }
        res.json({
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
        });
      });
    });
  }
};