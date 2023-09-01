const User = require('../models/User')

const login = async (req, res) => {

    try {
        const findUser = await User.findOne({ email: req.body.email })
        if (!findUser) return res.status(404).json({ message: "User not found" })
        if (findUser.password === req.body.password && findUser.securityQuestion === req.body.securityQuestion) {
            return res.status(200).json({ message: "Login successfull" })
        }
        return res.status(400).json({ message: "Password not matched or security question did not matched" })
    } catch (error) {
        res.status(500).json({ message: "Internal error occured!" })
    }
}

module.exports = login