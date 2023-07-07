import m from "../lib/mithril.min.js"
import { getPasscolor, downloadImg } from "../lib/passcolor.js"
import { ec as EC } from  "../lib/elliptic.min.js"

function Register(){
  const ec = new EC("secp256k1")
  
  let warn = ""
  let disable = false
  
  function download() {
    const key = ec.genKeyPair();
    const hash = key.getPrivate().toString("hex");

    downloadImg(getPasscolor(hash));
    warn = "save the photo securely, and use it on the login page now";
  }
  
  return {
    oninit: () => {
      if(localStorage.getItem("priv")) m.route.set("/")
    },
    view: () => m("div.card", [
      m("h1", "Register"),
      m("button.btn", {
        onclick: download,
        disabled: disable
      }, "Generate your private Key"), m("br"),
      m("p.warn", warn),
      m(m.route.Link, { href: "/login" }, "Already have an account")
    ])
  }
}

export default Register