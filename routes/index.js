const authRoutes = require("./AuthRouter")
module.exports = (app) =>{
    app.use("/api/auth/",authRoutes)
}