const ProductController = require('./app/controllers/ProductController');
const express = require('express');
const router = express.Router();

router.get('/produto', ProductController.index);
router.get('/produto/:id', ProductController.show);
router.post('/produto', ProductController.store);
router.put('/produto/:id', ProductController.update);
router.delete('/produto/:id', ProductController.delete);

module.exports = router;
