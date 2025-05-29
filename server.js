const express = require("express")
require("dotenv").config()
const appRouter = require("./routes")
const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Using router
appRouter(app)

app.listen(port,()=>{
    try{
        console.log(`API word with http://localhost:${port}`)
    }catch(err){
        console.log(err.message)
    }
})