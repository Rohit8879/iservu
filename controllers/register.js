const { json } = require("express/lib/response")
const User = require("../models/User")

const register = async (req, res) => {
    const { name, password, email, panNumber, securityQuestion } = req.body
    try {
        const findUser = await User.findOne({ email, panNumber })
        if (findUser) return res.status(400).json({ message: "User already exists!" })
        const newUser = await User.create({ name, password, email, panNumber, securityQuestion });
        res.json({ message: "Use created", newUser })

    } catch (error) {
        res.status(500).json({ message: "Internal server error!" })
    }
}

module.exports = register