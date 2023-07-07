const Koa = require("koa")
const serve = require("koa-static")
const send = require('koa-send')
const bodyp = require('koa-bodyparser')
const EC = require("elliptic").ec
const http = require("http")
const { Server } = require("socket.io")
const mysql = require("mysql")

const app = new Koa()
const server = http.createServer(app.callback())
const io = new Server(server)

const port = process.env.PORT || 3000
const config  = process.env.DB_URL

const ec = new EC("secp256k1")

const accounts = {}
const contents = {}

var readyState = 0

/*var pool = mysql.createPool(config)
pool.query("SELECT * FROM accounts", [], (err, res) => {
  if(err) console.log(err)
  else{
    for(var item of res){
      accounts[item.pub] = {
        pp: item.pp,
        username: item.username,
        name: item.name,
        gender: item.gender
      }
    }
    console.log(accounts)
    readyState = 1
  }
})*/

const usedauth = []

function auth(token){
  const key = ec.keyFromPublic(token.pub, "hex")
  const verify = key.verify("s.auth-"+token.time, token.hash)
  const used = usedauth.includes(token.hash)

  if(Date.now()-token.time<5000 && verify && !used){
    usedauth.push(token.hash)
    setTimeout(() => {
      usedauth.slice(usedauth.indexOf(token.hash))
    },5000)
    return true
  }
  else return false
}

app.use(bodyp())
app.use(serve(__dirname+"/public"))
app.use(async ctx => {
  if(ctx.path == "/api"){
    const api = ctx.querystring
    const data = ctx.request.body
    if(api == "get-account"){
      if(!accounts[data.pub]) ctx.body = false
      else ctx.body = accounts[data.pub]
    }
    else if(api == "login"){
      if(auth(data)){
        ctx.body = true
        console.log("Authed")
      }else ctx.body = false
    }
    else if(api == "account"){
      if(!auth(data)) return
      var val = data.data
      if(val.username == "") return
      else if(val.pp.length > 480000) return
      else if(val.username != (accounts[data.pub]?accounts[data.pub].username:"") &&
        Object.values(accounts).find(obj => obj.username == val.username)){
        ctx.body = { err: "username not available" }
        return
      }
      
      /*if(accounts[data.pub]){
        pool.query(`UPDATE accounts SET
        username = ?,
        name = ?,
        gender = ?,
        pp = ? WHERE pub = ?`,
        [val.username,val.name,val.gender,val.pp,data.pub])
      }else{
        pool.query(`INSERT INTO accounts VALUES
        (?, ?, ?, ?, ?)`,
        [data.pub,val.username,val.name,val.gender,val.pp])
      }*/
      accounts[data.pub] = {
        pp: val.pp,
        username: val.username,
        name: val.name,
        gender: val.gender
      }
      ctx.body = true
    }
    else{
      ctx.body = false
    }
  }else{
    await send(ctx, 'index.html', { root: 'public' });
  }
})

const onlines = {}
const pending = {}

io.on("connection", socket => {
  socket.on("online", (data, callback) => {
    onlines[data] = socket.id

    if(pending[data] && Array.isArray(pending[data])){
      socket.emit("chat", pending[data], () => {
        pending[data].forEach(x => io.to(x.from).emit("received", x.id))
        delete pending[data]
      })
    }

    callback()
  })
  socket.on("chat", (data, callback) => {
    console.log(data)
    callback()
    
    if(!onlines[data.to]){
      if(!pending[data.to]) pending[data.to] = new Array()
      pending[data.to].push({
        from: data.from,
        msg: data.msg,
        id: data.id
      })
      return
    }
    
    io.to(onlines[data.to]).emit("chat", {
      from: data.from,
      msg: data.msg,
      id: data.id
    }, () => socket.emit("received", data.id))
  })
  
  socket.on("disconnect", reason => {
    const username = Object.keys(onlines).find(key => onlines[key] === socket.id)
    delete onlines[username]
  })
})

server.listen(port, () => {
  console.log("listening on *:",port);
});
