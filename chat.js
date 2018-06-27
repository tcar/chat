//npm modules
const express = require("express")

//private modules
const config = require("./config")
const user_routes = require("./routes/user")

const app = express()

app.use("/home",user_routes)

app.listen(3000, ()=> console.log(`app listening on port ${config.port}`))