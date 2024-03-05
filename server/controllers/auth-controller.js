
//importing user model because we use mongoose in this project not mongodb
//we play with models in mongoose
const User = require('../models/user-model')

//REGISTER USER IN DATABASE 
const register = async (req, res) => {

    try {

        //get register data from frontend Register form
        const { username, email, phone, password } = req.body

        //check if this user is already exists, if already exists we don't need to register
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.json({ msg: `user already exists` })
        }

        //if user not exist then we create a new user in database
        await User.create({ username, email, phone, password })
        return res.json({ msg: "successsfully registered" })

    }

    catch (error) {

        //if we found error in process then we send error to frontend
        return res.json({ msg: 'internal server error' })
    }
}

//LOGIN USER 
const login = async (req, res) => {

    try {

        //get login data from frontend Register form
        const { email, password } = req.body

        //check email is present or not if not then send "invalid credentials" to frontend
        const userExists = await User.findOne({ email: email })
        if (!userExists) {
            return res.json({ msg: "Invalid Credentials" })
        }


        //check passsword
        const user = await userExists.comparePassword(password)

        //correct password
        if (user) {
            return res.json({ msg: "Login Successful" })
        } 

        //wrong password
        else { 
            return res.json({ msg: "Invalid email or password" })
        }

    } catch (error) {

        //if we found error in process then we send error to frontend
        return res.json({ msg: 'internal server error' })
    }

}

module.exports = { register, login }