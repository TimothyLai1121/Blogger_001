const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");
const commentController = require("../../controllers/commentController");
const userController = require("../../controllers/userController");

// Define HTML routes for posts
router.get("/posts", (req, res) => {
    postController.findAll(req, res);
});

router.get("/posts/:id", (req, res) => {
    postController.findOne(req, res);
});

router.get("/posts/new", (req, res) => {
    postController.new(req, res);
});

router.get("/posts/edit/:id", (req, res) => {
    postController.edit(req, res);
});

// Define HTML routes for comments
router.get("/comments", (req, res) => {
    commentController.findAll(req, res);
});

router.get("/comments/new", (req, res) => {
    commentController.new(req, res);
});

// Define HTML routes for users
router.get("/users/signup", (req, res) => {
    userController.signup(req, res);
});

router.get("/users/login", (req, res) => {
    userController.login(req, res);
});

module.exports = router;
