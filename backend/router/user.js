const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.js');

const userCtrl = require('../controller/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/edit',auth, userCtrl.updateUser);
router.delete('/delete/:id',auth, userCtrl.deleteUser);

module.exports = router;