
const mongoose = require('mongoose')

const URI = 'mongodb+srv://mahesh31:mahesh123@cluster0.afaidao.mongodb.net/Resto?retryWrites=true&w=majority&appName=Cluster0'

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log('connection successful to DB')
    } catch (error) {
        console.error('database connection failed')
        process.exit(0)
    }
}

module.exports = connectDb