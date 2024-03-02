
//import contact model because in mongoose we require models to play with database server
const Contact = require('../models/contact-model')


//CONTACT FORM DATA FROM FRONTEND ADD IN DATABASE
const contactForm = async (req, res) => {

    try {

        //get data from frontend contact form
        const { username, email, message } = req.body

        //create database entry for this form data in the server
        await Contact.create({ username, email, message })
        res.json({ msg: "message send successfully" })

    } catch (error) {

        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}

module.exports = contactForm