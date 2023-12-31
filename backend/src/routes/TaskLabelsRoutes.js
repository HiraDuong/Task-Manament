const express = require("express");
const router = express.Router();
const taskLabelController = require("../controllers/TaskLabelControllers");
// Route cho task_label
// get all task_labels
router.get("/all_task_labels", taskLabelController.getAllTaskLabels);
// get all labels of a task
router.get("/task_labels/:task_id", taskLabelController.getTaskLabels);
// get all tasks of a label
router.get("/label_tasks/:label_id", taskLabelController.getLabelTasks);
// get all tasks of some labels
router.post("/some_label_tasks", taskLabelController.getSomeLabelTasks);
module.exports = router;