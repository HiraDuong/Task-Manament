//  LabelModel.js

const { DataTypes } = require("sequelize");
const sequelize = require("../../config/Sequelize");
const Labels = sequelize.define(
    'labels',{
        label_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        label_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        label_color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { tableName: "labels", timestamps: false },
    )
module.exports = Labels;