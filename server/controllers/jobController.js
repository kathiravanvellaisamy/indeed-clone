const asyncHandler = require("express-async-handler");
const Joblist = require("../models/jobModel");

// @desc GET All Jobs list
// @route GET /api/joblisting
// @access Public

const getJobLists = asyncHandler(async (req, res) => {
  const joblists = await Joblist.find();
  res.status(200).json(joblists);
});

// @desc GET Particular Job list
// @route GET /api/joblisting/:id
// @access Public

const getJob = asyncHandler(async (req, res) => {
  const job = await Joblist.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job not Found");
  }

  res.status(200).json(job);
});

// @desc Post a Jobs list
// @route POST /api/joblisting
// @access Private

const postJob = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please enter a Job Title");
  }
  if (!req.body.company) {
    res.status(400);
    throw new Error("Please enter a Company");
  }
  if (!req.body.city) {
    res.status(400);
    throw new Error("Please enter a City");
  }
  if (!req.body.salary) {
    res.status(400);
    throw new Error("Please enter a Salary");
  }
  if (!req.body.description) {
    res.status(400);
    throw new Error("Please enter a description");
  }
  if (!req.body.email) {
    res.status(400);
    throw new Error("Please enter a email");
  }
  if (!req.body.website) {
    res.status(400);
    throw new Error("Please enter a Website");
  }
  if (!req.body.phone) {
    res.status(400);
    throw new Error("Please enter a Phone Number");
  }

  const job = await Joblist.create({
    title: req.body.title,
    company: req.body.company,
    city: req.body.city,
    salary: req.body.salary,
    description: req.body.description,
    email: req.body.email,
    website: req.body.website,
    phone: req.body.phone,
  });
  res.status(200).json(job);
});

// @desc Update the Jobs list
// @route PUT /api/joblisting/:id
// @access Private

const updateJob = asyncHandler(async (req, res) => {
  const job = await Joblist.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job not Found");
  }

  const updatedJob = await Joblist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedJob);
});

// @desc Delete the  Jobs list
// @route DELETE /api/joblisting/:id
// @access Private

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Joblist.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job not Found");
  }
  await Joblist.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getJobLists,
  getJob,
  postJob,
  updateJob,
  deleteJob,
};
