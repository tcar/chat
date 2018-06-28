//npm modules
const express = require("express")
const path = require("path")

//private modules
const config = require("./server/config")
const user_routes = require("./server/routes/user")
const app = express()
app.use(express.static(path.join(__dirname,'dist')))

app.use("/home",user_routes)

app.route('*').get((req,res)=>{
    res.sendFile(path.join(__dirname + '/client/index.html'))})

app.listen(3000, ()=> console.log(`app listening on port ${config.port}`))