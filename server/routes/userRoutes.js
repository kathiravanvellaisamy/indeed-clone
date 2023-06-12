const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  dashBoard,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", dashBoard);

module.exports = router;
