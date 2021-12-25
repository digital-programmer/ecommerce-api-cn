const express = require("express");
const router = express.Router();
const productsController = require("../../../controllers/api/products_api");

router.post('/create', productsController.create);
router.get('/', productsController.get);
router.delete('/:id', productsController.delete);
router.post('/:id/update_quantity', productsController.updateQuantity);

module.exports = router;