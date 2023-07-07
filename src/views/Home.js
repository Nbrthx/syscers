import m from "../lib/mithril.min.js"
import { socket } from "../socket.js"
import { dbset, dbget, clear } from "../lib/idb-keyval.min.js"

const Home = {
  vm: {
    msg: "",
    username: "",
    contact: "",
    popup: true,
    chats: [],
    pending: [],
    send: () => {
      Home.vm.pending.push({
        id: Home.vm.chats.length,
        from: Home.vm.username,
        to: Home.vm.contact,
        msg: Home.vm.msg
      })
      Home.vm.chats.push({ from: "you", msg: Home.vm.msg, stats: 0 })
      
      socket.emit("chat", {
        id: Home.vm.chats.length-1,
        from: Home.vm.username,
        to: Home.vm.contact,
        msg: Home.vm.msg
      }, () => {
        Home.vm.pending.shift()
        Home.vm.chats[Home.vm.chats.length-1].stats = 1
        
        dbset("some", Home.vm.chats)
        
        m.redraw()
      })
  
      Home.vm.msg = ""
    },
    popups: () => {
      if(Home.vm.contact == "") Home.vm.popup = true
      else Home.vm.popup = Home.vm.popup?false:true
    },
    mapping: () => {
      return Home.vm.chats.map(x => {
        if(x.stats || x.stats === 0) return m("p", [x.from, ": ", x.msg, m("b", "("+x.stats+")")])
        return m("p", [x.from, ": ", x.msg])
      })
    },
    logout: () => {
      localStorage.removeItem("priv")
      localStorage.removeItem("pub")
      m.route.set("/login")
    }
  },
  oninit: () => {
    if(!localStorage.getItem("priv")) m.route.set("/login")

    m.request({
      method: "post",
      url: "/api?get-account",
      body: { pub: localStorage.getItem("pub") }
    }).then(data => {
      if(!data){
        m.route.set("/account")
        return
      }
      else{
        Home.vm.username = data.username
        socket.emit("online", data.username, () => "nothing")
      }
    })

    dbget("some").then(val => {
      if(val) Home.vm.chats = val
      m.redraw()
    })
  },
  view: () => m("div", [
    m("div", {}, [
      m("div.content", Home.vm.mapping())
    ]),
    m("div.ui", [
      m("div.header", [
        m("button", { onclick: Home.vm.logout }, "Logout"),
        m("button.change", { onclick: Home.vm.popups }, "New"),
        m("button", { onclick: () => clear() }, "Clear"),
        m("div.persons", { id: Home.vm.popup?"show":"hide" } , [
          m("input.contact", {
            type: "text",
            value: Home.vm.contact,
            oninput: e => Home.vm.contact = e.target.value,
            placeholder: "New Contact"
          })
        ])
      ]),
      m("div.navbar", [
        m("textarea.text-chat", {
          value: Home.vm.msg,
          oninput: e => Home.vm.msg = e.target.value
        }),
        m("button.send-chat", { onclick: Home.vm.send }, "send")
      ])
    ]),
  ])
}

socket.on("reconnect", () => socket.emit("online", Home.vm.username, () => {
    
  if(!pending[0]) return

  Home.vm.pending.forEach(x => {
    socket.emit("chat", x)
  })
  Home.vm.pending = []
}))

socket.on("received", data => {
  console.log(Home.vm.chats)
  if(Array.isArray(data)){
    data.forEach(x => {
      Home.vm.chats[x].stats = 2
    })
  }else Home.vm.chats[data].stats = 2

  dbset("some", Home.vm.chats)

  m.redraw()
})

socket.on("chat", (data, callback) => {
  if(Array.isArray(data)){
    data.forEach(x => {
      if(x.from == Home.vm.username) return
      Home.vm.chats.push({
        from: x.from,
        msg: x.msg
      })
    })
  }else{
    if(data.from == Home.vm.username) return
    Home.vm.chats.push({ from: data.from, msg: data.msg })
  }
  callback()
  
  dbset("some", Home.vm.chats)
  
  m.redraw()
})

export default Home