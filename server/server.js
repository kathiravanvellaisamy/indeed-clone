const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/joblisting", require("./routes/jobRoutes"));

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
