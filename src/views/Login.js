import { getPasscolor, readPasscolor, downloadImg } from "../lib/passcolor.js"
import "../lib/elliptic.min.js"

function Login(){
  if(localStorage.getItem("priv")) m.route.set("/")
  
  const file = document.createElement("input")
  file.type = "file"
  
  const EC = elliptic.ec
  const ec = new EC("secp256k1")
  
  let warn = ""
  let disable = false
  
  file.onchange = e => readPasscolor(e.target.files[0], r => {
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
        m.route.set("/")
      }else{
        warn = "Passcode not valid"
        disable = false
      }
    })

    localStorage.setItem("priv",r)
    localStorage.setItem("pub",pub)
    
    disable = true
  })
  
  return {
    view: () => m("div.card", [
      m("h1", "Login"),
      m("button.btn", {
        onclick: () => file.click(),
        disabled: disable
      }, "Upload private Key"), m("br"),
      m("p.warn", warn),
      m(m.route.Link, { href: "/register"}, "Don't have an account")
    ])
  }
}

export default Login