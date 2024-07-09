//const Reporting = require("./../models/reportingModel");

import reportingModel from "./../models/reportingModel.js";
import sheet, { SHEET_ID } from "./../apps/googleApp.js";

// create a new reportings
export const createReporting = async (req, res, next) => {
  // get the date from the request body
  const reportingData = reportingModel.parse(req.body);
  const reportingValues = Object.values(reportingData);
  try {
    // dave the date in the db
    const row = await sheet.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "siteWeb!A2:D2",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [reportingValues],
      },
    });
    res.status(201).json({
      status: "success",
      message: "reporting created",
      data: row.config.data.values,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
      message: error.message,
    });
  }
};

// read all reportings
export const getAllReporting = async (req, res, next) => {
  try {
    // dave the date in the db
    const allReportings = await sheet.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "siteWeb!A2:D",
    });
    res.status(201).json({
      status: "success",
      message: "reporting created",
      data: allReportings.data.values,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
      message: error.message,
    });
  }
};

// read One reporting
export const getOneRepporting = async (req, res, next) => {
  const { id } = req.params;
  try {
    // dave the date in the db
    const allReportings = await sheet.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      //range: "siteWeb!A2:D",
      range: `siteWeb!A${id}:D${id}`,
    });
    res.status(201).json({
      status: "success",
      message: "reporting created",
      data: allReportings.data.values,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
      message: error.message,
    });
  }
};

// update one reporting
export const updatOneReporting = async (req, res, next) => {
  const updatedReportingData = reportingModel.parse(req.body);
  const updatedValu = Object.values(updatedReportingData);
  const { id } = req.params;

  try {
    const row = await sheet.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `siteWeb!A${id}:D${id}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [updatedValu],
      },
    });

    res.status(201).json({
      status: "success",
      message: "reporting updated",
      data: row.config.data.values,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
      message: error.message,
    });
  }
};

// delete one reporting
export const deleteOneReporting = async (req, res, next) => {
  const { id } = req.params;

  try {
    const row = await sheet.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `siteWeb!A${id}:D${id}`,
      valueInputOption: "RAW",
    });

    res.status(201).json({
      status: "success",
      message: "reporting deleted",
      data: row.config.data.values,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
      message: error.message,
    });
  }
};
