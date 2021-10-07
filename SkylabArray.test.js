const { SkylabArray } = require("./SkylabArray");

let arrayStrawberry = new SkylabArray();

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

  describe("When it receives (5, 'ok',12,13)", () => {
    test("Then it should return an object containing all the elements", () => {
      // Arrange
      const obj1 = 5;
      const obj2 = 9;
      const obj3 = 12;
      const obj4 = 13;
      const expected = { 0: 5, 1: 9, 2: 12, 3: 13, length: 4 };

      // Act
      const result = arrayStrawberry.posh(obj1, obj2, obj3, obj4);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
