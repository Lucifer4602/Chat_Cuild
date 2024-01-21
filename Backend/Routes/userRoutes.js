const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userControllers");

const { protect } = require("../MiddleWare/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/", protect, allUsers);

module.exports = router;
