//const express = require("express");
//const dotenv = require("dotenv");

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//const reportingRoutes = require("./routes/reportingRoutes");
import reportingRoutes from "./routes/reportingRoutes.js";

// staring the app
const app = express();

// setup the variable envierment
dotenv.config();

// set up morgane
app.use(morgan("dev"));

// parcing the data from the requiest body
app.use(express.json());

// set up the routes
app.use("/api/v1/report", reportingRoutes);

// starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`server is runnig on port ${process.env.PORT}`);
});
