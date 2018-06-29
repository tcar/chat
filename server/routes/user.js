

const express = require("express")
const router = express.Router()
const models = require("../models")

router.post("/login", async (req, res)=>{
console.log(req.body)
const user = await models.User.findOne({where:{
    lat:req.body.lat,
    long:req.body.long
}})
console.log("\n\n")
console.log(user)
if(!user)
    {
        res.io.emit("newUser",{})
        res.end()
    }

})



module.exports = router