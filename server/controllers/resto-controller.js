//import contact model because in mongoose we require models to play with database server
const Hotel = require('../models/hotel-model')


//CONTACT FORM DATA FROM FRONTEND ADD IN DATABASE
const createHotel = async (req, res) => {

    try {

        //get data from frontend resto form
        const { id, name, address, email, services, mobile } = req.body

        //create database entry for this form data in the server
        await Hotel.create({ id, name, address, email, services, mobile })
        res.json({ msg: "Hotel Created Successfully" })

    } catch (error) {

        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}

const updateHotel = async (req, res) => {
    try {
        
        const hotel = req.body
        const hotelExists = await Hotel.findOne({ id: hotel.id })
        await hotelExists.updateOne({ 
            name: hotel.name,
            email: hotel.email,
            mobile: hotel.mobile,
            address: hotel.address,
            services: hotel.services
        })
        return res.json({ "msg": "Resto Update Successfully" })

    } catch (error) {
        
        //send this message to frontend(client) if we find any error in this process
        return res.json({ msg: "internal server error" })
    }
}

const deleteHotel = async (req, res) =>{
    try {
        const {id} = req.body
        await Hotel.deleteOne({ id: id })
        return res.json({ "msg": "Resto deleted Successfully" })

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

module.exports = { createHotel, getHotels, updateHotel, deleteHotel }