const io = require("socket.io-client");
const hack = require("./handlers");

let socket = io.connect("http://localhost:3001/security");

const payload = "entered";

hack(socket, payload);
