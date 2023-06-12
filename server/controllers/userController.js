// @desc Register new User
// @route POST /api/users
// @access Public

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc Get User data
// @route GET /api/users/dashboard
// @access Public

const dashBoard = (req, res) => {
  res.json({ message: "Users Dashboard" });
};

module.exports = {
  registerUser,
  loginUser,
  dashBoard,
};
