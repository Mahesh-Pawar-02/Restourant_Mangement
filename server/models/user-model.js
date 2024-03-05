
const mongoose = require('mongoose')

//imported bcryptjs for hash password
const bcryptjs = require('bcryptjs')


//created userSchema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


//this method used everywhere in the project
userSchema.methods.comparePassword = async function (password) {
    return bcryptjs.compare(password, this.password)
}

//this function called just before user is entered in database
userSchema.pre('save', async function(next) {
    const user = this
    if(!user.isModified("password")) {
        next()
    }
    try {
        const saltRound = await bcryptjs.genSalt(10)
        const hash_password = await bcryptjs.hash(user.password, saltRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

//creating mmodel 
const User = new mongoose.model("User", userSchema)

module.exports = User