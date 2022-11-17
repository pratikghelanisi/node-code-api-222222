const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();


const {addPost, Postlist, deletePost, editPost } = require('../Controller/post');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload');
  },
  filename: function(req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, Date.now() + '.' + ext);
  },
});

const upload = multer({storage: storage});

// New Post
router.post('/addPost', upload.array('files'), addPost);
router.get('/postlist', Postlist);
router.delete('/deletePost', deletePost);
router.post('/editPost', upload.array('files'), editPost);

module.exports = router;
