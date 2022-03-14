const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');
const multermid = require('../middleware/multer-config');

const postCtrl = require('../controller/post');

router.get('/',auth,postCtrl.getPost);
router.post('/',auth,multermid, postCtrl.addPost);

router.post('/read', postCtrl.readPost);
router.get('/read/:id', postCtrl.getReadPost);


module.exports = router;