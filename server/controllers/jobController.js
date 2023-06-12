const asyncHandler = require("express-async-handler");

// @desc GET All Jobs list
// @route GET /api/joblisting
// @access Public

const getJobLists = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all the Job listings..." });
});

// @desc GET Particular Job list
// @route GET /api/joblisting/:id
// @access Public

const getJob = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} shows the details` });
});

// @desc Post a Jobs list
// @route POST /api/joblisting
// @access Private

const postJob = asyncHandler(async (req, res) => {
  if (!req.body.jobtitle) {
    res.status(400);
    throw new Error("Please enter a Job Title");
  }
  if (!req.body.location) {
    res.status(400);
    throw new Error("Please enter a Location");
  }
  if (!req.body.salary) {
    res.status(400);
    throw new Error("Please enter a Salary");
  }
  res.status(200).json({ message: "Job Posted Successfully!" });
});

// @desc Update the Jobs list
// @route PUT /api/joblisting/:id
// @access Private

const updateJob = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Updated Successfully!` });
});

// @desc Delete the  Jobs list
// @route DELETE /api/joblisting/:id
// @access Private

const deleteJob = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Deleted Successfully!` });
});

module.exports = {
  getJobLists,
  getJob,
  postJob,
  updateJob,
  deleteJob,
};
