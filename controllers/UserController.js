module.exports = {
    createUser: async (req,res) =>{
        try{
            res.send("Huỳnh Anh Developer")
        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}