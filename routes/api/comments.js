const express = require("express");
const router = express.Router();
const commentController = require("../../controllers/commentController");

// Define API routes for comments
router.get("/", commentController.findAll);
router.get("/:id", commentController.findById);
router.post("/", commentController.create);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.remove);

module.exports = router;