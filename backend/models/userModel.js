const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: String,
    email: String,
    password: String

});

const user =mongoose.model('User', userModel);

module.exports = user