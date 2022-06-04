const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth.js');
const multermid = require('../middleware/multer-config');

const postCtrl = require('../controller/post');

router.get('/',auth,postCtrl.getAllPost);
router.post('/addPost',auth,multermid, postCtrl.addPost);
router.get('/:id/', auth, postCtrl.getPost);
router.get('/readPost/:id', auth, postCtrl.getReadPost);
router.post('/read/', auth, postCtrl.insertReadPost);


module.exports = router;