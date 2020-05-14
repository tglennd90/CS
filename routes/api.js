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

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newUserPost = new UserPost(data);

    newUserPost.save((error) => {
        if (error) {
            res.json({ msg: 'Sorry, internal errors while saving' });
            return;
        } 

        return res.json({
            msg: 'We received your data!'
        })
    });

    
});

module.exports = router;