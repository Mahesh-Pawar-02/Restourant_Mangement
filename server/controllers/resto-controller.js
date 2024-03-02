//import contact model because in mongoose we require models to play with database server
const Hotel = require('../models/hotel-model')


//CONTACT FORM DATA FROM FRONTEND ADD IN DATABASE
const createHotel = async (req, res) => {

    try {

        //get data from frontend contact form
        const { id, name, address, email, services, mobile } = req.body

        //create database entry for this form data in the server
        await Hotel.create({ id, name, address, email, services, mobile })
        res.json({ msg: "Hotel Created Successfully" })

    } catch (error) {

        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}

module.exports = createHotel