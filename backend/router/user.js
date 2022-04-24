const express = require('express');
const router = express.Router();


const userCtrl = require('../controller/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/edit', userCtrl.updateUser);
router.delete('/delete', userCtrl.deleteUser);

module.exports = router;