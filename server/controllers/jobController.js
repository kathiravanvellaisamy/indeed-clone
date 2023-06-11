// @desc GET All Jobs list
// @route GET /api/joblisting
// @access Public

const getJobLists = (req, res) => {
  res.status(200).json({ message: "Get all the Job listings..." });
};

// @desc GET Particular Job list
// @route GET /api/joblisting/:id
// @access Public

const getJob = (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} shows the details` });
};

// @desc Post a Jobs list
// @route POST /api/joblisting
// @access Private

const postJob = (req, res) => {
  res.status(200).json({ message: "Job Posted Successfully!" });
};

// @desc Update the Jobs list
// @route PUT /api/joblisting/:id
// @access Private

const updateJob = (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Updated Successfully!` });
};

// @desc Delete the  Jobs list
// @route DELETE /api/joblisting/:id
// @access Private

const deleteJob = (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Deleted Successfully!` });
};

module.exports = {
  getJobLists,
  getJob,
  postJob,
  updateJob,
  deleteJob,
};
