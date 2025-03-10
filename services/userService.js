const mongoose = require('mongoose');
const User = require('../models/User');

/**
 * Get all users.
 * @returns {Promise<Array>}
 */
exports.getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(`getAllUsers: Error fetching users - ${error.message}`);
    }
};

/**
 * Get a user by ID.
 * @param {String} id - User ID
 * @returns {Promise<Object|null>}
 */
exports.getUserById = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid user ID");

        const user = await User.findById(id);
        if (!user) throw new Error("User not found");

        return user;
    } catch (error) {
        throw new Error(`getUserById: Error fetching user - ${error.message}`);
    }
};

/**
 * Create a new user.
 * @param {Object} userData - User details
 * @returns {Promise<Object>}
 */
exports.createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        return await newUser.save();
    } catch (error) {
        throw new Error(`createUser: Error creating user - ${error.message}`);
    }
};

/**
 * Update an existing user.
 * @param {String} id - User ID
 * @param {Object} userData - Updated user details
 * @returns {Promise<Object|null>}
 */
exports.updateUser = async (id, userData) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid user ID");

        const updatedUser = await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) throw new Error("User not found");

        return updatedUser;
    } catch (error) {
        throw new Error(`updateUser: Error updating user - ${error.message}`);
    }
};

/**
 * Delete a user.
 * @param {String} id - User ID
 * @returns {Promise<Object|null>}
 */
exports.deleteUser = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid user ID");

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) throw new Error("User not found");

        return deletedUser;
    } catch (error) {
        throw new Error(`deleteUser: Error deleting user - ${error.message}`);
    }
};

/**
 * Search users by name.
 * @param {String} query - Search keyword
 * @returns {Promise<Array>}
 */
exports.searchUsers = async (query) => {
    try {
        return await User.find({ name: { $regex: query, $options: 'i' } });
    } catch (error) {
        throw new Error(`searchUsers: Error searching users - ${error.message}`);
    }
};
