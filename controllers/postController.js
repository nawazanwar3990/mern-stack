const PostService = require('../services/postService');

/**
 * Get all posts
 */
exports.getPosts = async (req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a post by ID
 */
exports.getPostById = async (req, res) => {
  try {
    const post = await PostService.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new post
 */
exports.createPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({ message: "Title and content are required" });
    }
    const newPost = await PostService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing post
 */
exports.updatePost = async (req, res) => {
  try {
    if (!req.body.title && !req.body.content) {
      return res.status(400).json({ message: "At least one field (title or content) must be updated" });
    }
    const updatedPost = await PostService.updatePost(req.params.id, req.body); // Fixed object reference
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a post
 */
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await PostService.deletePost(req.params.id); // Fixed object reference
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Search posts by title or content
 */
exports.searchPosts = async (req, res) => {
  try {
    const results = await PostService.searchPosts(req.query.q);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
