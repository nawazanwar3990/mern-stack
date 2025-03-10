const mongoose = require('mongoose');
const Role = require('../models/Role');

/**
 * Get all roles.
 * @returns {Promise<Array>}
 */
exports.getAllRoles = async () => {
    try {
        return await Role.find();
    } catch (error) {
        throw new Error(`getAllRoles: Error fetching roles - ${error.message}`);
    }
};

/**
 * Get a role by ID.
 * @param {String} id - Role ID
 * @returns {Promise<Object|null>}
 */
exports.getRoleById = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid role ID");

        const role = await Role.findById(id);
        if (!role) throw new Error("Role not found");

        return role;
    } catch (error) {
        throw new Error(`getRoleById: Error fetching role - ${error.message}`);
    }
};

/**
 * Create a new role.
 * @param {Object} roleData - Role details
 * @returns {Promise<Object>}
 */
exports.createRole = async (roleData) => {
    try {
        const newRole = new Role(roleData);
        return await newRole.save();
    } catch (error) {
        throw new Error(`createRole: Error creating role - ${error.message}`);
    }
};

/**
 * Update an existing role.
 * @param {String} id - Role ID
 * @param {Object} roleData - Updated role details
 * @returns {Promise<Object|null>}
 */
exports.updateRole = async (id, roleData) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid role ID");

        const updatedRole = await Role.findByIdAndUpdate(id, roleData, {
            new: true,
            runValidators: true,
        });

        if (!updatedRole) throw new Error("Role not found");
        return updatedRole;
    } catch (error) {
        throw new Error(`updateRole: Error updating role - ${error.message}`);
    }
};

/**
 * Delete a role.
 * @param {String} id - Role ID
 * @returns {Promise<Object|null>}
 */
exports.deleteRole = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid role ID");

        const deletedRole = await Role.findByIdAndDelete(id);
        if (!deletedRole) throw new Error("Role not found");

        return deletedRole;
    } catch (error) {
        throw new Error(`deleteRole: Error deleting role - ${error.message}`);
    }
};

/**
 * Search roles by name.
 * @param {String} query - Search keyword
 * @returns {Promise<Array>}
 */
exports.searchRoles = async (query) => {
    try {
        return await Role.find({ name: { $regex: query, $options: 'i' } });
    } catch (error) {
        throw new Error(`searchRoles: Error searching roles - ${error.message}`);
    }
};
