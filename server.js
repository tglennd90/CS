const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');

const app = express();

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/citizen_service', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose: Connected'.green)
});

// Schema
const Schema = mongoose.Schema;

let date = Date();
const UserSchema = new Schema({
    name: String,
    userName: String,
    password: String,
    email: String,
    dateAdded: {
        type: String,
        default: date.toString()
    }
});

// Model
const UserPost = mongoose.model('UserPost', UserSchema);

// Save to Mongo
const data = {
    name: 'Tatum Daily',
    userName: 'tgd9019',
    password: 'admin1990',
    email: 'tgd9019@outlook.com'
};

const newUserPost = new UserPost(data); // New Instance of Model

newUserPost.save((error) => {
    if (error) {
        console.log(' ');
        console.log("Error while trying to save to Mongo".red)
    } else {
        console.log(' ');
        console.log("Data saved to Mongo successfully!".green)
    }
});

// HTTP Request Logger
app.use(morgan('tiny'));

// Routes
app.get('/api', (req, res) => {
    UserPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'abdaily',
        password: 'abdaily'
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server: http://localhost:${PORT}`.cyan));