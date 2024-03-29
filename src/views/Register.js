import m from "../lib/mithril.min.js"
import { downloadImg } from "../lib/passcolor.js"
import { ec as EC } from  "../lib/elliptic.min.js"

const Register = {
  warn: "",
  disable: false,
  download: () => {
    const key = ec.genKeyPair();
    const hash = key.getPrivate().toString("hex");

    downloadImg(getPasscolor(hash));
    Register.warn = "save the photo securely, and use it on the login page now"
  },
  
  
  
  oninit: () => {
    if(localStorage.getItem("priv")) m.route.set("/")
  },
  view: () => m("div.card", [
    m("h1", "Register"),
    m("button.btn", {
      onclick: Register.download,
      disabled: Register.disable
    }, "Generate your private Key"), m("br"),
    m("p.warn", Register.warn),
    m(m.route.Link, { href: "/login" }, "Already have an account")
  ])
}

export default Register