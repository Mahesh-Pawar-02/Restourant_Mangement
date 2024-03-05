const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    id: { type:Number, require:true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String, require: true },
    services: { type: String, require: true },
    mobile: { type: Number, require: true }
})


const Hotel = new mongoose.model("Hotel", hotelSchema)
module.exports = Hotel