const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

// Define API routes for posts
router.get("/", postController.findAll);
router.get("/:id", postController.findById);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.remove);

module.exports = router;
