const express = require("express");
const {
  getJobLists,
  getJob,
  postJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const router = express.Router();
const { protect } = require("../middleware/userMiddleware");

// Routes

router.route("/").get(getJobLists).post(protect, postJob);
router
  .route("/:id")
  .get(getJob)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

module.exports = router;
