import { getPasscolor, readPasscolor, downloadImg } from "../lib/passcolor.js"
import "../lib/elliptic.min.js"
import { randpp, resize } from "../lib/randpp.js"

function Account(){
  if(!localStorage.getItem("priv")) m.route.set("/login")
  
  const file = document.createElement("input")
  file.type = "file"
  
  const EC = elliptic.ec
  const ec = new EC("secp256k1")
  
  var photo = randpp()
  
  var warn = ""
  
  var pp = photo
  var username = ""
  var name = ""
  var gender = 1
  
  m.request({
    method: "post",
    url: "/api?get-account",
    body: { pub: localStorage.getItem("pub") }
  }).then(data => {
    if(data && !data.err) {
      username = data.username
      name = data.name
      gender = data.gender
      pp = data.pp
      console.log("changed")
    }else if(data.err){
      warn = data.err
    }else{
      pp = photo
    }
  })
  
  file.onchange = data => {
    var reader = new FileReader();
    reader.readAsDataURL(data.target.files[0]);
    reader.onload = e => {
      pp = e.target.result
      m.redraw()
    }
  }
  
  const save = () => resize(file.files[0], url => {
    if(url) pp = url
    
    if(username == ""){
      warn = "username must be filled"
      return
    }

    const key = ec.keyFromPrivate(localStorage.getItem("priv"))
    const pub = key.getPublic(true, "hex")
    const time = Date.now()
    const signature = key.sign("s.auth-"+time).toDER("hex")
    console.log(pp.length)
    const body = {
      data: {
          pp: pp,
          username: username.toLowerCase(),
          name: name,
          gender: gender
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
      if(data.err) warn = data.err
      else m.route.set("/")
    })
  })
  
  const br = m("br")
  return {
    view: () => m("div.card", [
      m("img", { src: pp, onclick: () => file.click(), class: "pp" }),
      m("label", "Username"), br,
      m("input.text", {
        type: "text",
        required: true,
        value: username,
        oninput: e => username = e.target.value
      }), br, br,
      m("label", "Name"), br,
      m("input.text", {
        type: "text",
        value: name,
        oninput: e => name = e.target.value
      }), br, br,
      m("label", "Gender"), br,
      [1, 0].map(x => [
        m('input', {
          type: 'radio',
          name: 'gender',
          checked: gender == x,
          onchange: () => gender = x,
          value: x
        }),
        (x == 1? "Male":"Female"), br
      ]), br,
      m("button.btn", {
        onclick: save
      }, "Save"), br,
      m("p", { id: "warn" }, warn),
      m(m.route.Link, { href: "/"}, "Back to dashboard")
    ])
  }
}

export default Account