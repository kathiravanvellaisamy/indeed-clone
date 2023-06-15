const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  dashBoard,
} = require("../controllers/userController");
const { protect } = require("../middleware/userMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", protect, dashBoard);

module.exports = router;
