const Role = require('../models/Role');

exports.get = async (req, res) => {
  try {
    const roles = await Role.find().populate('permissions');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRole = new Role(req.body);
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedRole) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) return res.status(404).json({ message: "Role not found" });
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const results = await Role.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
