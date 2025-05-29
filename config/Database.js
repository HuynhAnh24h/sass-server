// mongodb+srv://anhdev24h:<db_password>@kornbest-crm.r6ubxgr.mongodb.net/?retryWrites=true&w=majority&appName=kornbest-crm
const mongoose = require("mongoose")

module.exports = async() =>{
    try{
        const createConnect = await mongoose.connect(`mongodb+srv://${process.env.DB_USER }:${process.env.DB_PASSWORD}@kornbest-crm.r6ubxgr.mongodb.net/?retryWrites=true&w=majority&appName=kornbest-crm`)
        if(createConnect.connection.readyState === 1){
            console.log("Connect database Success")
        }else{
            console.log("Connect Fail")
        }
    }catch(err){
        console.log("Connect Error:",err.message)
    }
}