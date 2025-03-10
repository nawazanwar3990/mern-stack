// const express = require('express');
// const router = express.Router();
// const {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
//   searchUsers,
// } = require('../controllers/roleController');

// // Define routes
// router.get('/', getUsers);
// router.get('/search', searchUsers);
// router.get('/:id', getUserById);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

// module.exports = router;



const express = require('express');
const router = express.Router();
const {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
  searchRoles,
} = require('../controllers/roleController'); // Ensure this file contains role-related logic

// Define role routes
router.get('/', getRoles); // Get all roles
router.get('/search', searchRoles); // Search roles by name
router.get('/:id', getRoleById); // Get a specific role by ID
router.post('/', createRole); // Create a new role
router.put('/:id', updateRole); // Update an existing role
router.delete('/:id', deleteRole); // Delete a role

module.exports = router;

