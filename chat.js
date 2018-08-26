//npm modules
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

//private modules
const config = require("./server/config")
const models = require("./server/models")
const SocketManager = require("./server/SocketManager")
const app = express()
app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())





models.sequelize.sync().then(function() {
    const server = app.listen(3000, ()=> console.log(`app listening on port ${config.port}`))    
    const io = module.exports.io = require("socket.io")(server)
    console.log("hhh\n")
    console.log(module.exports)
    io.on("connection", SocketManager)

    app.route('*').get((req,res)=>{
        res.sendFile(path.join(__dirname + '/client/index.html'))})
})


