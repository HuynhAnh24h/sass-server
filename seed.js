const bcrypt = require("bcrypt")
const UserModel = require("./models/User")
const ConnectModel = require("./config/Database")

const registerAdmin = async() =>{
    try{
        ConnectModel()
        const hashPassword = await bcrypt.hash("admin",10)
        const newUser = new UserModel({
            name: "adminHr",
            email: "adminHr@kornbest.vn",
            password: hashPassword,
            address: "Admin adrress",
            phone: "0386849786",
            role: "hr"
        })
        const createAdmin = await newUser.save()
        if(createAdmin){
            console.log("Create Admin Success")
        }else{
            console.log("Create Admin False")
        }
    }catch(err){
        console.log("Create Admin Error:", err.message)
    }
}

registerAdmin()
