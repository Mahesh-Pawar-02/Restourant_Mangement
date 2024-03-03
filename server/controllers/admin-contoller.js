
const User = require('../models/user-model')
const Hotel = require('../models/hotel-model')
const Contact = require('../models/contact-model')

const getUsers = async (req, res) => {
    try {
        
        const users = await User.find()
        res.json({ users: users })

    } catch (error) {
        
        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}
const getHotels = async (req, res) => {
    try {
        
        const hotels = await Hotel.find()
        res.json({ hotels: hotels })

    } catch (error) {
        
        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}
const getContacts = async (req, res) => {
    try {
        
        const contacts = await Contact.find()
        res.json({ contacts: contacts })

    } catch (error) {
        
        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}

module.exports = { getUsers, getHotels, getContacts }