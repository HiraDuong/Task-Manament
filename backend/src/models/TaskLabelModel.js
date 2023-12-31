const DataTypes = require("sequelize");
const sequelize = require("../../config/Sequelize");   
const TaskLabel = sequelize.define(
    'task_labels',{
        task_label_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        label_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { tableName: "tasklabels", timestamps: false },
    )
    module.exports = TaskLabel;