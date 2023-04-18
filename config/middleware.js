const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./connection");

const sessionStore = new SequelizeStore({
  db: sequelize
});

const middleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore
});

module.exports = middleware;
