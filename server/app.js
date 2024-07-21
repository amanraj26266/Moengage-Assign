const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const authRoutes = require('./routes/Auth')

const list = require("./routes/ListRoutes");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", list);
// app.use("/api/auth", authRoutes);

module.exports = app;
