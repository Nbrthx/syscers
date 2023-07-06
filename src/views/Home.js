import m from "../lib/mithril.min.js"
import { socket } from "../socket.js"
import { dbset, dbget, clear } from "../lib/idb-keyval.min.js"

function Home(){
  if(!localStorage.getItem("priv")){
    m.route.set("/login")
    return
  }
  
  let msg = ""
  let username = ""
  let contact = ""
  let popup = true

  let chats = []
  let pending = []
  
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
      username = data.username
      socket.emit("online", username, () => "nothing")
    }
  })
  
  function logout(){
    localStorage.removeItem("priv")
    localStorage.removeItem("pub")
    m.route.set("/login")
  }

  dbget("some").then(val => {
    if(val) chats = val
    m.redraw()
  })
	
	socket.on("chat", (data, callback) => {
    if(Array.isArray(data)){
      data.forEach(x => {
        if(x.from == username) return
        chats.push({
          from: x.from,
          msg: x.msg
        })
      })
      callback()
    }else{
      if(data.from == username) return
	    chats.push({ from: data.from, msg: data.msg })
      callback()
    }
	  
	  dbset("some", chats)
	  
	  m.redraw()
	})
	
	function send(){
	  pending.push({
      id: chats.length,
	    from: username,
      to: contact,
	    msg: msg
    })
	  chats.push({ from: "you", msg: msg, stats: 0 })
    
	  socket.emit("chat", {
      id: chats.length-1,
	    from: username,
      to: contact,
	    msg: msg
	  }, () => {
      pending.shift()
      chats[chats.length-1].stats = 1
      
      dbset("some", chats)
      
      m.redraw()
    })

    msg = ""
	  m.redraw()
	}

  socket.on("reconnect", () => socket.emit("online", username, () => {

    if(!pending[0]) return

    pending.forEach(x => {
      socket.emit("chat", x)
    })
    pending = []
  }))

  socket.on("received", data => {
    if(Array.isArray(data)){
      data.forEach(x => {
        chats[x].stats = 2
      })
    }else chats[data].stats = 2

    dbset("some", chats)

    m.redraw()
  })

  function mapping(){
    return chats.map(x => {
      if(x.stats || x.stats === 0) return m("p", [x.from, ": ", x.msg, m("b", "("+x.stats+")")])
      return m("p", [x.from, ": ", x.msg])
    })
  }

  function popups(){
    if(contact == "") popup = true
    else popup = popup?false:true
  }
  
  return {
    view: () => m("div", [
      m("div", {}, [
        m("div.content", mapping())
      ]),
      m("div.ui", [
        m("div.header", [
          m("button", { onclick: logout }, "Logout"),
          m("button.change", { onclick: popups }, "New"),
          m("button", { onclick: () => clear() }, "Clear"),
          m("div.persons", { id: popup?"show":"hide" } , [
            m("input.contact", {
              type: "text",
              value: contact,
              oninput: e => contact = e.target.value,
              placeholder: "New Contact"
            })
          ])
        ]),
        m("div.navbar", [
          m("textarea.text-chat", {
            value: msg,
            oninput: e => msg = e.target.value
          }),
          m("button.send-chat", { onclick: send }, "send")
        ])
      ]),
    ])
  }
}

export default Home