import {io} from "./lib/socket.io.esm.min.js"

export const socket = io(/*{transports:["pooling"]}*/);