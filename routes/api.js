const express = require('express');

const router = express.Router();

const UserPost = require('../models/userPost');

// Routes
router.get('/', (req, res) => {
    UserPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'abdaily',
        password: 'abdaily'
    };
    res.json(data);
});

module.exports = router;