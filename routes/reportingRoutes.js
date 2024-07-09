//const express = require("express");
//const reportingController = require("./../controller/reportingController");

import express from "express";
import {
  createReporting,
  getAllReporting,
  getOneRepporting,
  updatOneReporting,
} from "./../controller/reportingController.js";

const Route = express.Router();

Route.route("/devRep").post(createReporting).get(getAllReporting);

Route.route("/devRep/:id").get(getOneRepporting).put(updatOneReporting);
export default Route;
