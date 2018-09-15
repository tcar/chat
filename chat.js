//npm modules
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

//private modules
const config = require("./server/config")
const models = require("./server/models")
const app = express()
app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//init db
initDB(models)

//start server
const server = app.listen(process.env.PORT||3000, ()=> console.log(`app listening on port ${config.port}`))    
const io = require("socket.io")(server)

//websocket connection
require("./server/SocketManager")(io)


app.route('*').get((req,res)=>{
    res.sendFile(path.join(__dirname + '/client/index.html'))})



async function initDB(models)
{
    await models.sequelize.sync()
}