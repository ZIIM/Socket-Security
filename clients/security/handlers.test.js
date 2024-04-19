const { loggingHacker, handlingHacker } = require("./handlers");

describe("SECURITY", () => {
  let socket;

  beforeEach(() => {
    socket = {
      emit: jest.fn(),
      on: jest.fn((event, cb) => cb("payload")),
    };
  });

  describe("loggingHacker", () => {
    it("should emit 'get-hackerQueues' and listen to 'enteredHQ', 'enteredDepartments', and 'enteredHR'", () => {
      loggingHacker(socket);

      expect(socket.emit).toHaveBeenCalledWith("get-hackerQueues");
      expect(socket.on).toHaveBeenCalledWith("enteredHQ", expect.any(Function));
      expect(socket.on).toHaveBeenCalledWith(
        "enteredDepartments",
        expect.any(Function),
      );
      expect(socket.on).toHaveBeenCalledWith("enteredHR", expect.any(Function));

      // Test the callbacks
      expect(socket.emit).toHaveBeenCalledWith(
        "security-alert",
        "security-alert",
      );
      expect(socket.emit).toHaveBeenCalledWith(
        "high-security-alert",
        "high-security-alert",
      );
    });
  });

  describe("handlingHacker", () => {
    it("should emit 'get-HRdemands' and listen to 'terminate'", () => {
      handlingHacker(socket);

      expect(socket.emit).toHaveBeenCalledWith("get-HRdemands");
      expect(socket.on).toHaveBeenCalledWith("terminate", expect.any(Function));

      // Test the callback
      expect(socket.emit).toHaveBeenCalledWith("remove-hacker");
    });
  });
});
