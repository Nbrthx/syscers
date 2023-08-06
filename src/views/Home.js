import m from "../lib/mithril.min.js"
import { socket } from "../socket.js"
import { dbset, dbget, clear } from "../lib/idb-keyval.min.js"

const App = {
  msg: "",
  username: "",
  contact: "",
  popup: true,
  chats: {},
  pending: [],
  send: () => {
    const data = {
      id: 0,
      from: App.username,
      to: App.contact,
      msg: App.msg
    }
    
    if(!Array.isArray(App.chats[data.to])) App.chats[data.to] = []
    
    data.id = App.chats[data.to].length
    App.chats[data.to].push({ from: "you", msg: App.msg, stats: 0 })
    App.pending.push(data)
    
    socket.emit("chat", data, () => {
      App.pending.shift()
      App.chats[data.to][data.id].stats = 1
      
      dbset("chats", App.chats)
      
      m.redraw()
    })

    App.msg = ""
  },
  popups: () => {
    if(App.contact == "") return
    
    App.popup = App.popup ? false : true
  
    dbget("chats").then(val => {
      if(val) App.chats = val
      m.redraw()
    })
  },
  mapping: () => {
    if(!App.chats[App.contact]) return []
    return App.chats[App.contact].map(x => {
      if(!x.stats && x.stats !== 0) return m("p", [x.from, ": ", x.msg])
      return m("p", [x.from, ": ", x.msg, m("b", "("+x.stats+")")])
    })
  },
  logout: () => {
    localStorage.removeItem("priv")
    localStorage.removeItem("pub")
    m.route.set("/login")
  },
  
  
  
  oninit: () => {
    if(!localStorage.getItem("priv")) m.route.set("/login")
    
    dbget("chats").then(val => {
      if(val) App.chats = val
    })
    
    m.request({
      method: "post",
      url: "/api?get-account",
      body: { pub: localStorage.getItem("pub") }
    }).then(data => {
      if(!data){
        m.route.set("/account")
        return
      }
      App.username = data.username
      socket.emit("online", data.username, () => "nothing")
    })
  },
  view: () => m("div", [
    m("div", {}, [
      m("div.content", App.mapping())
    ]),
    m("div.ui", [
      m("div.header", [
        m("button", { onclick: App.logout }, "Logout"),
        m("button.change", { onclick: App.popups }, "New"),
        m("button", { onclick: () => clear() }, "Clear"),
        m("div.persons", { id: App.popup?"show":"hide" } , [
          m("input.contact", {
            type: "text",
            value: App.contact,
            oninput: e => App.contact = e.target.value,
            placeholder: "New Contact"
          }), Object.keys(App.chats).map(x => {
            return m("button", {
              onclick: () => App.contact = x
            }, x)
          })
        ])
      ]),
      m("div.navbar", [
        m("textarea.text-chat", {
          value: App.msg,
          oninput: e => App.msg = e.target.value
        }),
        m("button.send-chat", { onclick: App.send }, "send")
      ])
    ]),
  ])
}

socket.on("reconnect", () => socket.emit("online", App.username, () => {
    
  if(!pending[0]) return

  App.pending.forEach(x => {
    socket.emit("chat", x)
  })
  App.pending = []
}))

socket.on("received", data => {
  if(Array.isArray(data)){
    data.forEach(x => {
      App.chats[x.to][x.id].stats = 2
    })
  }else App.chats[data.to][data.id].stats = 2

  dbset("chats", App.chats)

  m.redraw()
})

socket.on("chat", (data, callback) => {
  if(Array.isArray(data)){
    data.forEach(x => {
      if(x.from == App.username) return
      if(!Array.isArray(App.chats[x.from])) App.chats[x.from] = []
      App.chats[x.from].push({
        from: x.from,
        msg: x.msg
      })
    })
  }else{
    if(data.from == App.username) return
    if(!Array.isArray(App.chats[data.from])) App.chats[data.from] = []
    App.chats[data.from].push({ from: data.from, msg: data.msg })
  }
  callback()
  
  dbset("chats", App.chats)
  
  m.redraw()
})

export default App