const mongoose = require("mongoose")


// Model User Quản trị viên App
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
    },
    image: {
        type: String,
        default:""
    },
    role:{
        type: String,
        enum:["user","admin","hr","accountant","manager"],
        default: "user"
    }
})

// Function Control Database

const User = mongoose.model("User",UserSchema)
module.exports = User