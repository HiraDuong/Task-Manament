const DataTypes = require("sequelize");
const sequelize = require("../../config/Sequelize");   
const Tasks = require("./TaskModel");
const Labels = require("./LabelModel");
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
    TaskLabel.belongsTo(Tasks, {
        foreignKey: 'task_id',
       
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      TaskLabel.belongsTo(Labels, {
        foreignKey: 'label_id',
       
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    module.exports = TaskLabel;