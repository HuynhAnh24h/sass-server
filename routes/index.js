const userRoutes = require("./UserRouter")
module.exports = (app) =>{
    app.use("/api/user/",userRoutes)
}