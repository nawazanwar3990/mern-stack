const Post = require('../models/Post'); // ✅ Fix import

/**
 * Get all posts.
 * @returns {Promise<Array>}
 */
exports.getAllPosts = async () => {
    return await Post.find();
};

/**
 * Get a post by ID.
 * @param {String} id - Post ID
 * @returns {Promise<Object>}
 */
exports.getPostById = async (id) => {
    return await Post.findById(id);
};

/**
 * Create a new post.
 * @param {Object} postData - Post details
 * @returns {Promise<Object>}
 */
exports.createPost = async (postData) => { // ✅ Fixed parameter name
    return await new Post(postData).save();
};

/**
 * Update an existing post.
 * @param {String} id - Post ID
 * @param {Object} postData - Updated post details
 * @returns {Promise<Object>}
 */
exports.updatePost = async (id, postData) => {
    return await Post.findByIdAndUpdate(id, postData, {
        new: true,
        runValidators: true,
    });
};

/**
 * Delete a post.
 * @param {String} id - Post ID
 * @returns {Promise<Object>}
 */
exports.deletePost = async (id) => { // ✅ Fixed comment
    return await Post.findByIdAndDelete(id);
};

/**
 * Search posts by name.
 * @param {String} query - Search keyword
 * @returns {Promise<Array>}
 */
exports.searchPosts = async (query) => {
    return await Post.find({ name: new RegExp(query, 'i') });
};
