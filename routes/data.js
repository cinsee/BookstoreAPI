import express from "express";
// const express = require("express");

import {
  createData,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
} from "../controllers/dataController.js";

const router = express.Router();

//create new data
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);
router.get("/:id", getSingleData);
router.get("/", getAllData);

export default router;
// module.exports = router;
