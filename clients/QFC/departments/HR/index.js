const io = require("socket.io-client");
const justHRthings = require("./handlers");

let socket = io.connect("http://localhost:3001/security");

socket.emit("connection");

justHRthings(socket);
