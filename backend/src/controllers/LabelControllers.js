const Labels = require("../models/LabelModel");
const Users = require("../models/UserModel");
const { Op } = require("sequelize");

// Get all labels by user_id
const getAllLabels = async (req, res) => {
  try {
    const { user_id } = req.params;
    const labels = await Labels.findAll({
      where: {
        user_id: user_id,
      },
    });
    res.status(200).json(labels);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Create a label by user_id
const createLabel = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { label_name, label_color } = req.body;
    const label = await Labels.create({
      label_name: label_name,
      label_color: label_color,
      user_id: user_id,
    });
    res.status(200).json(label);
  } catch (error) {
    res.status(500).json(error);
  }
}
// delete a label by label_id
const deleteLabel = async (req, res) => {
  try {
    const { label_id } = req.params;
    const label = await Labels.destroy({
      where: {
        label_id: label_id,
      },
    });
    res.status(200).json(label);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
    getAllLabels,
    createLabel,
    deleteLabel,
}