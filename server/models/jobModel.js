const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Job Title"],
    },
    company: {
      type: String,
      required: [true, "Please add a Company"],
    },
    city: {
      type: String,
      required: [true, "Please add a City"],
    },
    salary: {
      type: String,
      required: [true, "Please add a Salary"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    email: {
      type: String,
      required: [true, "Please add a Contact Email"],
    },
    website: {
      type: String,
      required: [true, "Please add a Website URL"],
    },
    phone: {
      type: String,
      required: [true, "Please add a Phone Number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Joblist", jobSchema);
