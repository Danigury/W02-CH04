const { SkylabArray } = require("./SkylabArray");

describe("Given a SkylabArray class", () => {
  describe("When it receives (5, 'ok')", () => {
    test("Then it should return an object containing all the elements", () => {
      // Arrange
      const obj1 = 5;
      const obj2 = "ok";
      const expected = { 0: 5, 1: "ok", length: 2 };

      // Act
      const result = new SkylabArray(obj1, obj2);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
