const io = require("socket.io-client");
const { loggingHacker, handlingHacker } = require("./handlers");

let socket = io.connect("http://localhost:3001/security");

socket.emit("connection");

loggingHacker(socket);
handlingHacker(socket);
