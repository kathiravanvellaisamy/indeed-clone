const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

// connect the DB
connectDB();
const app = express();

//middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use("/api/joblisting", require("./routes/jobRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
