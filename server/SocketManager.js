
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
                io.emit("SENDUSERS", users)
            }

            socket.on("CREATEORUPDATE",(user)=> {
                console.log("\nhereeeeeee\n")
                user.ip = socket.handshake.address
                console.log(user)
                let new_user = createOrUpdate(user)
                users[usr.ip] = new_user
                io.emit("SENDUSERS", users)
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

    if(!usr.username)
    {
        return false
    }
    users[usr.ip] = usr
    return true
}

async function createOrUpdate(user)
{
    let usr = await models["User"].upsert(user)
    return usr
}

