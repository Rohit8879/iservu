const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const register = require('./controllers/register')
const login = require('./controllers/login')
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.post("/register", register)
app.post("/login",login)

mongoose.connect("mongodb+srv://rohit:rohit@cluster0.4s2hsw8.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected database")).catch(err => console.log(err))
app.listen(4000, (err) => {
    if (err) return console.log(err);
    console.log("server running at port 4000!");
})
