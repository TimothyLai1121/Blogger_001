# Blogger_001
Attempt making Blog


## Folder Structure
- models
  - post.js
  - comment.js
  - user.js
- controllers
  - postController.js
  - commentController.js
  - userController.js
- views
  - layouts
    - main.handlebars
  - posts
    - index.handlebars
    - show.handlebars
    - new.handlebars
    - edit.handlebars
  - comments
    - index.handlebars
    - new.handlebars
  - users
    - signup.handlebars
    - login.handlebars
  - partials
    - header.handlebars
    - footer.handlebars
- public
  - assets
    - css
      - main.css
    - js
      - main.js
- config
  - connection.js
  - middleware.js
- routes
  - api
    - posts.js
    - comments.js
    - users.js
  - html
    - html-routes.js
- .env
- .gitignore
- package.json
- server.js

## Task To Be Completed
Start by setting up the models folder. In the models folder, create post.js, comment.js, and user.js files to define the models for blog posts, comments, and users.
Create the controllers folder and add postController.js, commentController.js, and userController.js files to define the functions for handling CRUD operations for posts, comments, and users.
Set up the views folder with subfolders for layouts, posts, comments, users, and partials. In the layouts folder, create a main.handlebars file as the main layout for the site. In the posts folder, create index.handlebars, show.handlebars, new.handlebars, and edit.handlebars to handle displaying all posts, individual posts, creating new posts, and editing existing posts. In the comments folder, create index.handlebars and new.handlebars to handle displaying comments and creating new comments. In the users folder, create signup.handlebars and login.handlebars for handling user sign up and login. In the partials folder, create header.handlebars and footer.handlebars to include header and footer in all pages.
Set up the public folder with assets for CSS and JavaScript.
Create the config folder with a connection.js file to connect to the database and a middleware.js file to define middleware functions.
Create the routes folder with subfolders for API routes and HTML routes. In the API routes folder, create posts.js, comments.js, and users.js to handle API routes for posts, comments, and users. In the HTML routes folder, create an html-routes.js file to handle HTML routes.
Add a .env file for storing environment variables and a .gitignore file to exclude sensitive information from being pushed to the repository.
Finally, create the package.json file and server.js file to run the application and manage dependencies.

## Dependencies
npm i sequelize
npm i dotenv
npm mysql2
npm i express
npm i express-handlebars
npm i express-session
npm i bcrypt
npm i connect-session-sequelize
