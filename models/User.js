const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    panNumber: String,
    securityQuestion: String,
})

module.exports = mongoose.model("User", userSchema)