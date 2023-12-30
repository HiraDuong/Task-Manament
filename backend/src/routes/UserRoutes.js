const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserControllers");
// Route cho user
// get all users
router.get("/users", UserController.getAllUsers);
// get user by id
router.get("/users/:userId", UserController.getUserById);
// create user
router.post("/users", UserController.createUser);
// update user by id
router.put("/users/:userId", UserController.updateUserById);
// delete user by id
router.delete("/users/:userId", UserController.deleteUserById);

module.exports = router;