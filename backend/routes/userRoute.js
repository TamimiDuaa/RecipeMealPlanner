const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const protect = require('../middleware/authMiddleware');

router.get('/:id',protect, userController.fetchUserById);

router.post('/login',userController.Login);

router.post('/register',userController.createNewUser);

router.put('/update/:id',protect, userController.updateUser);
router.delete('/delete/:id',protect, userController.deleteUser);
module.exports = router;