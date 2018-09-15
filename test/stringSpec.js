describe("Given a String", () => {

  describe("Given isString", () => {
    const o = {},
          n = 123,
          p = "123",
          f = () => {
            return true;
          };

    it("checks if object is a string", () => {
      expect(Utilities.isString(o)).to.be.false;
    });
    it("checks if number is not a string", () => {
      expect(Utilities.isFunction(p)).to.be.false;
    });
    it("checks if string is a string", () => {
      expect(Utilities.isString(p)).to.be.true;
    });
    it("checks if function is not a string", () => {
      expect(Utilities.isString(f)).to.be.false;
    });
    it("checks if a string ends with a set of characters", () => {
      const file = "test.json";
      expect(file.endsWith(".json")).to.be.true;
    });
  });

  describe("Given filter", () => {
    it("filters a char", () => {
      expect(Utilities.filter("Bubba got a big ol truck", " ")).to.equal("Bubbagotabigoltruck");
    });
  });
});
