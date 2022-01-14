const express = require("express");

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  authenticateUser,
} = require("../controllers/user_controller");

const router = express.Router();

router
  .post("/", createUser)
  .get("/", getUsers)
  .post("/authenticate", authenticateUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
