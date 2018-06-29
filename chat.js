//npm modules
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

//private modules
const config = require("./server/config")
const models = require("./server/models")
const user_routes = require("./server/routes/user")
const app = express()
app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())





models.sequelize.sync().then(function() {
    const server = app.listen(3000, ()=> console.log(`app listening on port ${config.port}`))    
    const io = require("socket.io")(server)

    app.use(function(req, res, next){
        res.io = io;
        next();
    })
    app.use("/user",user_routes)

    io.on('connection', (socket)=>{
        console.log('user connected')
    })

    app.route('*').get((req,res)=>{
        res.sendFile(path.join(__dirname + '/client/index.html'))})
})

