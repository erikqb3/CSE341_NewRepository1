const express = require('express');
const contrController = require('../controllers/cntr.js');

router = express.Router();

router.get('/professional',contrController.getInfo);

// router.post('/post', contrController.createPost);

module.exports = router;