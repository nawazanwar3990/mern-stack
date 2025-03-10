const Category = require('../models/Category');

/**
 * Get all categories.
 * @returns {Promise<Array>}
 */
exports.getAllCategories = async () => {
    return await Category.find();
};

/**
 * Get a category by ID.
 * @param {String} id - Category ID
 * @returns {Promise<Object>}
 */
exports.getCategoryById = async (id) => {
    return await Category.findById(id);
};

/**
 * Create a new category.
 * @param {Object} categoryData - Category details
 * @returns {Promise<Object>}
 */
exports.createCategory = async (categoryData) => {
    return await new Category(categoryData).save();
};

/**
 * Update an existing category.
 * @param {String} id - Category ID
 * @param {Object} categoryData - Updated category details
 * @returns {Promise<Object>}
 */
exports.updateCategory = async (id, categoryData) => {
    return await Category.findByIdAndUpdate(id, categoryData, {
        new: true,
        runValidators: true,
    });
};

/**
 * Delete a category.
 * @param {String} id - Category ID
 * @returns {Promise<Object>}
 */
exports.deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

/**
 * Search categories by name.
 * @param {String} query - Search keyword
 * @returns {Promise<Array>}
 */
exports.searchCategories = async (query) => {
    return await Category.find({ name: new RegExp(query, 'i') });
};
