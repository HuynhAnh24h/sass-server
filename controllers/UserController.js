module.exports = {
    createUser: async (req,res) =>{
        try{
            res.send("Deploy server Thành công")
        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}