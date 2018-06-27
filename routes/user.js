const express = require("express")
const geolocation = require('geolocation')
const router = express.Router()

router.get("/pocetna", (req, res)=>{
    geolocation.getCurrentPosition((err, position)=>{
        console.log("\nhere\n")
        console.log(position)
    })
    res.send("boook")
})



module.exports = router