const User = require('../models/User');

/**
 * Get all users.
 * @returns {Promise<Array>}
 */
exports.getAllUsers = async () => {
    return await User.find();
};

/**
 * Get a user by ID.
 * @param {String} id - User ID
 * @returns {Promise<Object>}
 */
exports.getUserById = async (id) => {
    return await User.findById(id);
};

/**
 * Create a new user.
 * @param {Object} userData - User details
 * @returns {Promise<Object>}
 */
exports.createUser = async (userData) => {
    return await new User(userData).save();
};

/**
 * Update an existing user.
 * @param {String} id - User ID
 * @param {Object} userData - Updated user details
 * @returns {Promise<Object>}
 */
exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true,
    });
};

/**
 * Delete a user.
 * @param {String} id - User ID
 * @returns {Promise<Object>}
 */
exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

/**
 * Search users by name.
 * @param {String} query - Search keyword
 * @returns {Promise<Array>}
 */
exports.searchUsers = async (query) => {
    return await User.find({ name: new RegExp(query, 'i') });
};
