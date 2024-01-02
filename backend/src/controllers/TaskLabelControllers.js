const { Op, where } = require("sequelize");
const TaskLabel = require("../models/TaskLabelModel");
const Task = require("../models/TaskModel");
const Label = require("../models/LabelModel");
// get all task labels
const getAllTaskLabels = async (req, res) => {
    try {
    
        const taskLabels = await TaskLabel.findAll();
        res.json(taskLabels);
    } catch (err) {
        res.json({ message: err });
    }
}

// get all labels of a task
const getTaskLabels = async (req, res) => {
    try {
        const { task_id } = req.params;

        const taskLabels = await TaskLabel.findAll({
            where: {
                task_id: task_id
            },
            include: [{
                model: Label,
                required: true
            }]
        });
        res.json(taskLabels);
    } catch (err) {
        res.json({ message: err });
    }
}
// get all tasks of a label
const getLabelTasks = async (req, res) => {
    try {
        const {label_id} = req.params;
        console.log(label_id);
        const labelTasks = await TaskLabel.findAll({
            where: {
                label_id: label_id
            },
            include: [{
                model: Task,
                required: true
            }]
        });
        res.json(labelTasks);
    } catch (err) {
        res.json({ message: err });
    }
}
// get all tasks of some labels
const getSomeLabelTasks = async (req, res) => {
    try {
        const listlabel_id = req.body.list_label_id; // Giả sử cậu gửi mảng listlabel_id qua body

        const labelTasks = await TaskLabel.findAll({
            where: {
                label_id: {
                    [Op.in]: listlabel_id
                }
            },
            include: [{
                model: Task,
                required: true,
                include: [
                    // Thêm bất kỳ điều kiện hoặc trường bổ sung nếu cần thiết
                ]
            }]
        });
        res.json(labelTasks);
    } catch (err) {
        res.json({ message: err.message });
    }
}

module.exports = {
    getAllTaskLabels,
    getTaskLabels,
    getLabelTasks,
    getSomeLabelTasks
}