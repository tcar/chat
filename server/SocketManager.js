
module.exports = function(socket){
    socket.on("SEND", (data)=>{



        socket.emit("SEND", data)
    })
}