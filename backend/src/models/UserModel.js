// UserModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/Sequelize");

const Users = sequelize.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
    },
    avt: {
      type: DataTypes.STRING,
      defaultValue:
       'https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg',
    },
  },
  { tableName: "users", timestamps: false },
);

module.exports = Users;
