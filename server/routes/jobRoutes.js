const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all the Job listings..." });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} shows the details` });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Job Posted Successfully!" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Updated Successfully!` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Job Id ${req.params.id} Deleted Successfully!` });
});

module.exports = router;
