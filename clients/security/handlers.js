function loggingHacker(socket) {
  socket.emit("get-hackerQueues");
  socket.on("enteredHQ", (payload) => {
    console.log("WE HAVE AN INTRUDER. Intruder message: ", payload);
    socket.emit("security-alert", "security-alert");
  });

  socket.on("enteredDepartments", (payload) => {
    console.log(
      "INTRUDER HAS MADE IT TO DEPARTMENTS. Intruder message: ",
      payload,
    );
    socket.emit("security-alert", "security-alert");
  });

  socket.on("enteredHR", (payload) => {
    console.log("INTRUDER HAS MADE IT TO HR. Intruder message: ", payload);
    socket.emit("high-security-alert", "high-security-alert");
  });
}

function handlingHacker(socket) {
  socket.emit("get-HRdemands");

  socket.on("terminate", () => {
    console.log("I am removing the hacker now");
    socket.emit("remove-hacker");
  });
}

module.exports = { loggingHacker, handlingHacker };
