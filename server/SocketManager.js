
const models = require("./models")
let users =new Map

module.exports = async function(io){
    io.on("connection", async (socket)=>{

        const user = {
            ip:socket.handshake.address
        }
        try{
            let has_nickname = await checkUser(user, users)
            if (!has_nickname)
            {
                io.emit("NONICKNAME", {})
            }
            else{
                console.log("tuuuu\n")
                console.log(has_nickname)
                socket.emit("USERDATA", has_nickname)

                io.emit("SENDUSERS", users)
            }

            socket.on("CREATEORUPDATE",async (user)=> {
                user.ip = socket.handshake.address
                let new_user = await createOrUpdate(user)
                console.log("\n\ntuu\n")
                console.log(new_user)
                users[new_user.ip] = new_user

                socket.emit("USERDATA", new_user)
                io.emit("SENDUSERS", users)
            })

            socket.on("SEND", (data)=>{
                console.log("user \n:")
                io.emit("MESSAGE", data)
            })


            socket.on("disconnect", async ()=>{
                let ip_add = socket.handshake.address
                delete users[ip_add]
                io.emit("SENDUSERS", users)
            })

        }catch(err){console.log(err)}
    })


}

async function checkUser(user, users)
{
    let usr = await models["User"].findOne({where:{
        ip:user.ip
    }, raw:true})

    if(usr)
    {
        if(!usr.username)
        {
            return false
        }
        users[usr.ip] = usr
        return usr
    }
    else 
        return false


}

async function createOrUpdate(user)
{
    let usr = await models["User"].upsert(user, {returning:true, raw:true})
    return usr[0]
}

