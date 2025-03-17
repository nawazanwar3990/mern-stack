const express = require('express');
const router = express.Router();
const {
  get,
  getById,
  create,
  update,
  remove,
  search,
} = require('../controllers/permissionController');

router.get('/', get);
router.get('/search', search);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;