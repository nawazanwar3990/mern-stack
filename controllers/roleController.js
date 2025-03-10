const roleService = require('../services/roleService');

/**
 * Get all roles
 */
exports.getRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a role by ID
 */
exports.getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new role
 */
exports.createRole = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Role name is required" });
    }
    const newRole = await roleService.createRole(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing role
 */
exports.updateRole = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Role name is required" });
    }
    const updatedRole = await roleService.updateRole(req.params.id, req.body);
    if (!updatedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a role
 */
exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await roleService.deleteRole(req.params.id);
    if (!deletedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
