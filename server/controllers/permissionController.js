const Permission = require('../models/Permission');

exports.get = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: "Permission not found" });
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newPermission = new Permission(req.body);
    await newPermission.save();
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPermission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedPermission) return res.status(404).json({ message: "Permission not found" });
    res.status(200).json(updatedPermission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletedPermission = await Permission.findByIdAndDelete(req.params.id);
    if (!deletedPermission) return res.status(404).json({ message: "Permission not found" });
    res.status(200).json({ message: "Permission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const results = await Permission.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
