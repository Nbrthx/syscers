import "./lib/mithril.min.js"
import Login from "./views/Login.js"
import Register from "./views/Register.js"
import Dashboard from "./views/Home.js"
import Account from "./views/Account.js"

m.route.prefix = ""
m.route(document.querySelector("#root"), "/login", {
  "/login": Login,
  "/register": Register,
  "/": Dashboard,
  "/account": Account
})