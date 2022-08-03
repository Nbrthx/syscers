const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000

io.on('connection', socket => {
    socket.on('chat', message => {
        io.emit('chat', message)
    })
})

app.use(express.static(__dirname+"/public"))

app.get("*", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

server.listen(port, () => console.log("Listen on "+port))