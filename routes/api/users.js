const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// Define API routes for users
router.get("/", (req, res) => {
  userController.findAll(req, res);
});
router.get("/:id", (req, res) => {
  userController.findOne(req, res);
});
router.post("/", (req, res) => {
  userController.create(req, res);
});
router.put("/:id", (req, res) => {
  userController.update(req, res);
});
router.delete("/:id", (req, res) => {
  userController.delete(req, res);
});

module.exports = router;
