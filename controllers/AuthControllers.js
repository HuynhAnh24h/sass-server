const UserModel = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
module.exports = {
    // Auth Login Controller
    login: async (req,res) =>{
        try{
            const {email,password} = req.body
            if(!email || !password){
                return res.status(400).json({
                    success: false,
                    message: "email and Password not null"
                })
            }else{
                const user = await UserModel.findOne({email})
                if(!user){
                    return res.status(404).json({
                        success: false,
                        message: "User không tồn tại"
                    })
                }
                const checkPassword = bcrypt.compare(password, user.password)
                if(!checkPassword){
                    return res.status(402).json({
                        success: false,
                        message: "Mật khẩu không chính xác"
                    })
                }

                const user_jwt = jwt.sign({id: user.id, role: user.role}, process.env.JWT_KEY, {expiresIn: '2d'})

                return res.status(200).json({
                    success: true,
                    message: "Login Success",
                    token: user_jwt
                })
            }

        }catch(err){
            return res.status(500).json({
                success: false,
                message: "Auth Login Server Error",
                error: err.message
            })
        }
    }
}