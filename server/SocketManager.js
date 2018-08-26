const io = require("../chat").io

module.exports = function(socket){
    console.log("\n")
    console.log("socketid: " + socket.id)
    socket.on("SEND", (data)=>{
        console.log("\npodaci")
        console.log(io)


        socket.emit("SEND", data)
    })
}