const Users = require("../models/UserModel");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// createUser
const createUser = async (req, res) => {
  const { user_name, password, name, email } = req.body;

  try {
    // Kiểm tra email
    const emailCount = await Users.count({ where: { email: email } });
    if (emailCount > 0) {
      return res
        .status(409)
        .json({ error: "Email đã tồn tại, vui lòng chọn cái khác!" });
    }

    // Kiểm tra username
    const usernameCount = await Users.count({
      where: { user_name: user_name },
    });
    if (usernameCount > 0) {
      return res
        .status(409)
        .json({ error: "Username đã tồn tại, vui lòng chọn cái khác !" });
    }

    // Nếu không có trùng lặp, tạo mới người dùng
    const newUser = await Users.create({
      user_name,
      password,
      name,
      email,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const { user_name, password, name, email, avt } = req.body;

  // Lọc ra các trường không rỗng
  const nonEmptyFields = {
    ...(user_name && { user_name }),
    ...(password && { password }),
    ...(name && { name }),
    ...(email && { email }),
    ...(avt && { avt }),
  };
  const checkEmail = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (checkEmail) {
    return res.status(409).json({ error: "Email was used" });
  } else
    try {
      const user = await Users.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Update chỉ các trường không rỗng
      await user.update(nonEmptyFields);

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

