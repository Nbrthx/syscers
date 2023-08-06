import m from "../lib/mithril.min.js"
import { readPasscolor } from "../lib/passcolor.js"
import { ec as EC } from  "../lib/elliptic.min.js"

const App = {
  warn: "",
  disable: false,
  file: document.createElement("input"),
  
  
  
  oninit: () => {
    if(localStorage.getItem("priv")) m.route.set("/")
    
    App.file.type = "file"
    const ec = new EC("secp256k1")
    
    App.file.onchange = e => readPasscolor(e.target.files[0], r => {
      const key = ec.keyFromPrivate(r)
      const pub = key.getPublic(true, "hex")
      const time = Date.now()
      const signature = key.sign("s.auth-"+time).toDER("hex")
      const data = {
        pub: pub,
        hash: signature,
        time: time
      }
      
      m.request({
        method: "post",
        url: "/api?login",
        body: data
      }).then(data => {
        if(data){
          localStorage.setItem("priv",r)
          localStorage.setItem("pub",pub)
          m.route.set("/")
        }else{
          App.warn = "Passcode not valid"
          App.disable = false
        }
      })
      
      App.disable = true
    })
  },
  view: () => m("div.card", [
    m("h1", "App"),
    m("button.btn", {
      onclick: () => App.file.click(),
      disabled: App.disable
    }, "Upload private Key"), m("br"),
    m("p.warn", App.warn),
    m(m.route.Link, { href: "/register"}, "Don't have an account")
  ])
}

export default App