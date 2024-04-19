const hack = require("./handlers");

describe("hacks correctly", () => {
  it("should emit and console.log", () => {
    let socket = {
      emit: jest.fn(),
      on: jest.fn(),
    };
    let payload = "entered";

    hack(socket, payload);

    expect(socket.emit).toHaveBeenCalledWith("connection");
    expect(socket.emit).toHaveBeenCalledWith("entersHQ", payload + "HQ");
    expect(socket.emit).toHaveBeenCalledWith(
      "entersDepartments",
      payload + "Departments",
    );
    expect(socket.emit).toHaveBeenCalledWith("entersHR", payload + "HR");

    expect(socket.on).toHaveBeenCalledWith("enteredHQ", expect.any(Function));
    expect(socket.on).toHaveBeenCalledWith(
      "enteredDepartments",
      expect.any(Function),
    );
    expect(socket.on).toHaveBeenCalledWith("enteredHR", expect.any(Function));
    expect(socket.on).toHaveBeenCalledWith("found", expect.any(Function));
  });
});
