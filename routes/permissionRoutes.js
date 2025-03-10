const express = require('express');
const router = express.Router();
const {
  getPermissions,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission,
  searchPermissions,
} = require('../controllers/permissionController');

// Define routes
router.get('/', getPermissions);
router.get('/search', searchPermissions);
router.get('/:id', getPermissionById);
router.post('/', createPermission);
router.put('/:id', updatePermission);
router.delete('/:id', deletePermission);

module.exports = router;
