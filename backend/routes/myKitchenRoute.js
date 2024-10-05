const express = require('express');
const router = express.Router();

const myKitchen = require('../controllers/myKitchenController')
const protect = require('../middleware/authMiddleware');

router.get('/',protect,myKitchen.fetchAllItems);

router.post('/',protect, myKitchen.createNewItem)

router.put('/:id',protect, myKitchen.updateItem)
router.delete('/:id',protect, myKitchen.deleteItem)
router.delete('/',protect, myKitchen.deleteAllItems)

module.exports = router;