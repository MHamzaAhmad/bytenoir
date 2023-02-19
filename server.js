const express = require("express");
const dbConnect = require("./db/connection");

const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));

//initializers
require("dotenv").config();
mongoose.set("strictQuery", false);
dbConnect();

//apis
app.use("/api/blogs", require("./apis/blogs"));
app.use("/api/images", require("./apis/images"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
