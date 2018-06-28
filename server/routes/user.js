const express = require("express")
const router = express.Router()

router.get("/pocetna", (req, res)=>{
const html = "<h1>hello world</h1>"
    res.send(html)
})



module.exports = router