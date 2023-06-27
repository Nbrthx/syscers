import { getPasscolor, readPasscolor, downloadImg } from "../lib/passcolor.js"
import "../lib/elliptic.min.js"

function Register(){
  if(localStorage.getItem("priv")) m.route.set("/")
  
  const EC = elliptic.ec
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