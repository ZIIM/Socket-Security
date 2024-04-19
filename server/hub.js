const io = require("socket.io");
const FifoQueue = require("../lib/Queues");
const PORT = process.env.PORT || 3001;

const server = new io.Server(PORT);
const securityServer = server.of("/security");

let hackerQueues = new FifoQueue("hacker");
let securityAlerts = new FifoQueue("security");
let hrDemands = new FifoQueue("hr");

securityServer.on("connection", (socket) => {
  console.log("SOMEONE HAS CONNECTED");

  //NOTE: HACKER

  socket.on("entersHQ", (payload) => {
    hackerQueues.add(payload);
    socket.emit("enteredHQ", payload);
  });

  socket.on("get-hackerQueues", () => {
    if (hackerQueues.data.length > 0) {
      let hack = hackerQueues.getNext();
      socket.emit(hack, hack);
    }
  });

  socket.on("entersDepartments", (payload) => {
    hackerQueues.add(payload);
    socket.emit(payload, payload);
  });

  socket.on("entersHR", (payload) => {
    hackerQueues.add(payload);
    socket.emit(payload, payload);
  });

  //NOTE: SECURITY

  socket.on("security-alert", (payload) => {
    securityAlerts.add(payload);
  });

  socket.on("high-security-alert", (payload) => {
    securityAlerts.add(payload);
  });

  socket.on("get-security-alerts", () => {
    let securityLevel = securityAlerts.getNext();
    securityServer.emit(securityLevel);
  });

  socket.on("get-HRdemands", () => {
    if (hrDemands.data.length > 0) {
      securityServer.emit("terminate");
    }
  });

  //NOTE: HR

  socket.on("terminate", () => {
    hrDemands.add("terminate");
  });

  socket.on("remove-hacker", () => {
    securityServer.emit("found");
  });
});
