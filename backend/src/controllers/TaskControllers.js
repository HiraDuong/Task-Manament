
const Tasks = require("../models/TaskModel");
const Users = require("../models/UserModel");
const TaskLabels = require("../models/TaskLabelModel");
const { Op } = require("sequelize");
// Get all tasks by user_id
const getAllTasks = async (req, res) => {
  try {
    const { user_id } = req.params;
    const tasks = await Tasks.findAll({
      where: {
        user_id: user_id,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
}
// get all tasks due today
const getTasksByDueDate = async (req, res) => {
  const {due_date} = req.params
  try {
    const tasks = await Tasks.findAll({
      where :{
        due_date: due_date
      },
      include: [
        {
          model: TaskLabels,
          attributes: ["label_id"],
        },
      ],
    } )
    res.status(200).json(tasks);
  }catch (error) {
    res.status(500).json(error);
  }
} 
// Search tasks by task_name
const searchTasks = async (req, res) => {
    try {
      const { user_id } = req.params;
      const { task_name } = req.query; // Change from req.body to req.query to get the parameter from the URL query string
      const tasks = await Tasks.findAll({
        where: {
          user_id: user_id,
          task_name: {
            [Op.iLike]: `%${task_name}%`,
          },
        },
      });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
// Create a task by user_id
const createTask = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { task_name, description, due_date, due_time, remind_time, priority } = req.body;
 
    const task = await Tasks.create({
      task_name: task_name,
      description: description,
      due_date: due_date,
      due_time: due_time,
      remind_time: remind_time,
      priority: priority,
      user_id: user_id,
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Update a task by task_id
const updateTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { task_name, description, due_date, due_time, remind_time, priority } = req.body;
let updateFields = {};

if (task_name !== null) {
    updateFields.task_name = task_name;
}

if (description !== null) {
    updateFields.description = description;
}

if (due_date !== null) {
    updateFields.due_date = due_date;
}

if (due_time !== null) {
    updateFields.due_time = due_time;
}

if (remind_time !== null) {
    updateFields.remind_time = remind_time;
}

if (priority !== null) {
    updateFields.priority = priority;
}


    const task = await Tasks.update(
      updateFields
    , {
      where: {
        task_id: task_id,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}
// delete a task by task_id
const deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const task = await Tasks.destroy({
      where: {
        task_id: task_id,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}
// Get all tasks by user_id and status
const getTasksByStatus = async (req, res) => {
  try {
    const { user_id, status } = req.params;
    const tasks = await Tasks.findAll({
      where: {
        user_id: user_id,
        status: status,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
}
// Update status of a task by task_id
const updateStatus = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { status } = req.body;
    const task = await Tasks.update(
      {
        status: status,
      },
      {
        where: {
          task_id: task_id,
        },
      }
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
    getAllTasks,
    searchTasks,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    updateStatus,
    getTasksByDueDate,
}