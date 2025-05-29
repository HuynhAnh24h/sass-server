const express = require("express")
const router = express.Router()
const userControl = require("../controllers/UserController")

router.get('/create-user',userControl.createUser)



module.exports = router