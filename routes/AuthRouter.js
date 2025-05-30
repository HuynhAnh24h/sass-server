const express = require("express")
const router = express.Router()
const authControl = require("../controllers/AuthControllers")

router.post('/login',authControl.login)



module.exports = router