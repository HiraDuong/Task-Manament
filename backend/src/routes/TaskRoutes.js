const express = require('express');
const router = express.Router();
const TaskControllers = require('../controllers/TaskControllers.js');
// Route cho task
// get all tasks by user_id
router.get('/tasks/:user_id', TaskControllers.getAllTasks);
// create task by user_id
router.post('/tasks/:user_id', TaskControllers.createTask);
// update task by task_id
router.put('/tasks/:task_id', TaskControllers.updateTask);
// delete task by task_id
router.delete('/tasks/:task_id', TaskControllers.deleteTask);
// get all tasks by user_id and status
router.get('/tasks/:user_id/:status', TaskControllers.getTasksByStatus);
// update status of a task by task_id
router.put('/tasks/:task_id/status', TaskControllers.updateStatus);
// search tasks by user_id and task_name
router.get('/search/:user_id/tasks', TaskControllers.searchTasks);
module.exports = router;
