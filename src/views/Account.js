import m from "../lib/mithril.min.js"
import { ec as EC } from  "../lib/elliptic.min.js"
import { randpp, resize } from "../lib/randpp.js"

const App = {
  file: document.createElement("input"),
  photo: randpp(),
  warn: "",
  pp: null,
  username: "",
  name: "",
  gender: 1,
  save: () => resize(App.file.files[0], url => {
    if(url) App.pp = url
    
    if(App.username == ""){
      App.warn = "username must be filled"
      return
    }
    
    const ec = new EC("secp256k1")
    const key = ec.keyFromPrivate(localStorage.getItem("priv"))
    const pub = key.getPublic(true, "hex")
    const time = Date.now()
    const signature = key.sign("s.auth-"+time).toDER("hex")
    const body = {
      data: {
          pp: App.pp,
          username: App.username.toLowerCase(),
          name: App.name,
          gender: App.gender
      },
      pub: pub,
      hash: signature,
      time: time
    }
    m.request({
      method: "post",
      url: "/api?account",
      body: body
    }).then(data => {
      if(data.err) App.warn = data.err
      else m.route.set("/")
    })
  }),
  
  
  
  oninit: () => {
    if(!localStorage.getItem("priv")) m.route.set("/login")
    
    App.pp = App.photo
    
    App.file.type = "file"
    App.file.onchange = data => {
      var reader = new FileReader();
      reader.readAsDataURL(data.target.files[0]);
      reader.onload = e => {
        App.pp = e.target.result
        m.redraw()
      }
    }
    
    m.request({
      method: "post",
      url: "/api?get-account",
      body: { pub: localStorage.getItem("pub") }
    }).then(data => {
      if(data && !data.err) {
        App.username = data.username
        App.name = data.name
        App.gender = data.gender
        App.pp = data.pp
        console.log("changed")
      }else if(data.err){
        App.warn = data.err
      }else{
        App.pp = App.photo
      }
    })
  },
  view: () => m("div.card", [
    m("img.pp", { src: App.pp, onclick: () => App.file.click() }),
    m("label", "Username"), m("br"),
    m("input.text", {
      type: "text",
      required: true,
      value: App.username,
      oninput: e => App.username = e.target.value
    }), m("br"), m("br"),
    m("label", "Name"), m("br"),
    m("input.text", {
      type: "text",
      value: App.name,
      oninput: e => App.name = e.target.value
    }), m("br"), m("br"),
    m("label", "Gender"), m("br"),
    [1, 0].map(x => [
      m('input', {
        type: 'radio',
        name: 'gender',
        checked: App.gender == x,
        onchange: () => App.gender = x,
        value: x
      }),
      (x == 1? "Male":"Female"), m("br")
    ]), m("br"),
    m("button.btn", {
      onclick: App.save
    }, "Save"), m("br"),
    m("p.warn", App.warn),
    m(m.route.Link, { href: "/"}, "Back to dashboard")
  ])
}

export default App