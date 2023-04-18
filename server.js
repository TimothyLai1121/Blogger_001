const express = require("express");
const exphbs = require("express-handlebars");

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const db = require("./config/connection");

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use express-handlebars as the template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure express-session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
      db: db,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Set up the Express app to parse incoming requests as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load API routes for posts, comments, and users
const postRoutes = require("./routes/api/posts");
const commentRoutes = require("./routes/api/comments");
const userRoutes = require("./routes/api/users");

// Use the API routes for posts, comments, and users
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);

// Load HTML routes
const htmlRoutes = require("./routes/html/html-routes");


// Use the HTML routes
app.use(htmlRoutes);

// Start the Express app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
