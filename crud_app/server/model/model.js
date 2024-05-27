const mongoose = require("mongoose")

// Define schema
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

// Define model
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
