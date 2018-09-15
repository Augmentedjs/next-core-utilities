describe("Given arrays", () => {

  describe("Given ES6 Array.includes", () => {
    it("can check if a string is included", () => {
      const arr = ["x","y","z"];
      expect(arr.includes("z")).to.be.true;
    });
    it("can check if a number is included", () => {
      const arr = [1,2,3];
      expect(arr.includes(2)).to.be.true;
    });
    it("can check if a number is not included", () => {
      const arr = [1,2,3];
      expect(arr.includes(5)).to.be.false;
    });
  });

  describe("Given arrayHas", () => {
    it("can check if it has a string", () => {
      const arr = ["x","y","z"];
      expect(Utilities.arrayHas(arr, "z")).to.be.true;
    });
    it("can check if it has a number", () => {
      const arr = [1,2,3];
      expect(Utilities.arrayHas(arr, 2)).to.be.true;
    });
    it("can check if it does not have a number", () => {
      const arr = [1,2,3];
      expect(Utilities.arrayHas(arr, 5)).to.be.false;
    });
  });

  describe("Given ES6 Array.find", () => {
    const a = [{ "name": "Bubba", "id": 1 }, { "name": "Bill", "id": 2 }, { "name": "MonkeyBone", "id": 3 }], p = function(aa) { return (aa.id === 2); };
    it("checks if property is in an array", () => {
      const r = a.find(p);
      expect(r.name).to.equal("Bill");
      expect(r.id).to.equal(2);
    });

    it("checks if property is not in an array", () => {
      const r = a.find(p);
      expect(r).not.to.equal({ "name": "x", "id": 9 });
    });
  });
});
