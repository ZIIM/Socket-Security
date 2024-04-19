function hack(socket, payload) {
  socket.emit("connection");
  socket.emit("entersHQ", payload + "HQ");
  socket.on("enteredHQ", console.log);
  socket.emit("entersDepartments", payload + "Departments");
  socket.on("enteredDepartments", console.log);
  socket.emit("entersHR", payload + "HR");
  socket.on("enteredHR", console.log);

  socket.on("found", () => {
    console.log("AHHHHH I'VE BEEN FOUND");
    process.exit();
  });
}

module.exports = hack;
