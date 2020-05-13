const mongoose = require('mongoose');

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

module.exports = UserPost;