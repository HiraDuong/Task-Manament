const DataTypes = require("sequelize");
const sequelize = require("../../config/Sequelize");

const Tasks = sequelize.define(
    'tasks',
    {
        task_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_DATE'),
        },
        due_time: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIME'),
        },
        remind_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5,
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    },
    { tableName: "tasks", timestamps: false },
    )
module.exports = Tasks;