const express = require("express");
const router = express.Router();
const LabelController = require("../controllers/LabelControllers");
const { model } = require("mongoose");
// Route cho label
// get all labels by user_id
router.get("/labels/:user_id", LabelController.getAllLabels);
// create label by user_id
router.post("/labels/:user_id", LabelController.createLabel);
// delete label by label_id
router.delete("/labels/:label_id", LabelController.deleteLabel);

module.exports = router;