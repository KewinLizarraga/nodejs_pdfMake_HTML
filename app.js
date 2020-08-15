require("dotenv").config();
const express = require("express");
const path = require("path");

const router = require("./src/routes/index.routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(process.env.PORT, () =>
  console.log(`Server run on PORT: ${process.env.PORT}`)
);
