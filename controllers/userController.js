const UserService = require('../services/userService');

exports.getUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const newUser = await UserService.createUser(req.body);
  res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
  const updatedUser = await UserService.updateUser(req.params.id, req.body);
  res.status(200).json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  const deletedUser = await UserService.deleteUser(req.params.id);
  res.status(200).json(deletedUser);
};

exports.searchUsers = async (req, res) => {
  const results = await UserService.searchUsers(req.query.q);
  res.status(200).json(results);
};
