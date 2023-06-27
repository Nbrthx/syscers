import { socket } from "../socket.js"
import { dbset, dbget, update } from "../lib/idb-keyval.min.js"

function Home(){
  if(!localStorage.getItem("priv")){
    m.route.set("/login")
    return
  }
  
  let msg = ""
  let username = ""
  let contact = ""
  let popup = false
  
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
    }
  })
  
  function newEnterHandler(callback) {
    let countEnter = 0;
    return event => {
      const newCount = (event.target.value.match(/\n/g) || []).length;
      if (countEnter < newCount) callback(event);
      countEnter = newCount;
    }
  }

  
  function logout(){
    localStorage.removeItem("priv")
    localStorage.removeItem("pub")
    m.route.set("/login")
  }
  
  let chats = []
  dbget("some").then(val => {
    if(val) chats = val
    m.redraw()
  })
	
	socket.on("chat", data => {
	  if(data.from == username) return
	  chats.push({ from: data.from, msg: data.msg })
	  
	  dbset("some", chats)
	  
	  m.redraw()
	})
	
	function send(){
	  socket.emit("chat", {
	    from: username,
	    msg: msg
	  })
	  chats.push({ from: "you", msg: msg })
	  msg = ""
	  
	  dbset("some", chats)
	  
	  m.redraw()
	}

  function mapping(){
    return chats.map(x => m("p", x.from+": "+x.msg))
  }

  function popups(){
    popup = popup?false:true
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
            resize: "disabled",
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