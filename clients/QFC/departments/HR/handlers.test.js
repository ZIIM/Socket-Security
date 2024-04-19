const justHRthings = require("./handlers");

describe("testing Hr functions", () => {
  let socket;

  beforeEach(() => {
    socket = {
      emit: jest.fn(),
      on: jest.fn((event, cb) => cb()),
    };
  });

  it("should emit get-security-alerts and get-HRdemands", () => {
    justHRthings(socket);
    expect(socket.emit).toHaveBeenCalledWith("get-security-alerts");
    expect(socket.emit).toHaveBeenCalledWith("get-HRdemands");
  });

  it("should handle security-alert event", () => {
    console.log = jest.fn();
    justHRthings(socket);
    expect(socket.on).toHaveBeenCalledWith(
      "security-alert",
      expect.any(Function),
    );
    expect(console.log).toHaveBeenCalledWith("eh, who cares about that");
  });

  it("should handle high-security-alert event and emit terminate", () => {
    console.log = jest.fn();
    justHRthings(socket);
    expect(socket.on).toHaveBeenCalledWith(
      "high-security-alert",
      expect.any(Function),
    );
    expect(console.log).toHaveBeenCalledWith("GET RID OF THEM");
    expect(socket.emit).toHaveBeenCalledWith("terminate");
  });
});
