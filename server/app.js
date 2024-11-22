const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const departmentRoutes = require("./routes/department");
const peopleRoutes = require("./routes/people");

app.use("/api/departments", departmentRoutes);
app.use("/api/people", peopleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
