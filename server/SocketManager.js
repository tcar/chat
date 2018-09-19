
const models = require("./models")
let users =new Map
const mac = require("getmac")

module.exports = async function(io){
    io.on("connection", async (socket)=>{

  

        try{
            let user = {}
            socket.on("LOGIN", async (ip)=>{
                 user.ip=ip
                 let has_nickname = await checkUser(user, users, socket)
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
            })


            socket.on("CREATEORUPDATE",async (user)=> {
                user.ip = user.ip
                let new_user = await createOrUpdate(user)
                console.log("\n\ntuu\n")
                console.log(new_user)
                users[socket.id] = new_user

                socket.emit("USERDATA", new_user)
                io.emit("SENDUSERS", users)
            })

            socket.on("SEND", (data)=>{
                console.log("user \n:")
                io.emit("MESSAGE", data)
            })


            socket.on("disconnect", async ()=>{
                delete users[socket.id]
                io.emit("SENDUSERS", users)
            })

        }catch(err){console.log(err)}
    })


}

async function checkUser(user, users, socket)
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
        users[socket.id] = usr
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

function getMacadd()
{
    return new Promise((resolve, reject)=>{
        mac.getMac(function(err, macAddress){
            if (err)  throw err
            return resolve(macAddress)
        })    
    })
}

