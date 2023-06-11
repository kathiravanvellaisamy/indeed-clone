const express = require("express");
const {
  getJobLists,
  getJob,
  postJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const router = express.Router();

// Routes

router.route("/").get(getJobLists).post(postJob);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;
