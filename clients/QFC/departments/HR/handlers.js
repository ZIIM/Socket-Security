function justHRthings(socket) {
  socket.emit("get-security-alerts");

  socket.emit("get-HRdemands");

  socket.on("security-alert", () => {
    console.log("eh, who cares about that");
  });

  socket.on("high-security-alert", () => {
    console.log("GET RID OF THEM");
    socket.emit("terminate");
  });
}

module.exports = justHRthings;
