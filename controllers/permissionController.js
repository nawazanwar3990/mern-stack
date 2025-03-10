const permissionService = require('../services/permissionService');

/**
 * Get all permissions
 */
exports.getPermissions = async (req, res) => {
  try {
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json(permissions); // Fixed incorrect variable name
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a permission by ID
 */
exports.getPermissionById = async (req, res) => {
  try {
    const permission = await permissionService.getPermissionById(req.params.id);
    if (!permission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new permission
 */
exports.createPermission = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Permission name is required" });
    }
    const newPermission = await permissionService.createPermission(req.body); // Fixed case error
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing permission
 */
exports.updatePermission = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Permission name is required" });
    }
    const updatedPermission = await permissionService.updatePermission(req.params.id, req.body); // Fixed case error
    if (!updatedPermission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.status(200).json(updatedPermission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a permission
 */
exports.deletePermission = async (req, res) => {
  try {
    const deletedPermission = await permissionService.deletePermission(req.params.id); // Fixed case error
    if (!deletedPermission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.status(200).json({ message: "Permission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Search permissions by name
 */
exports.searchPermissions = async (req, res) => {
  try {
    const results = await permissionService.searchPermissions(req.query.q); // Fixed case error
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
