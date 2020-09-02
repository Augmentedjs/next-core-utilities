describe("Given an object", () => {
  it("can set defaults", () => {
    const obj = Utilities.defaults({ "x": 1, "y": 2}, { "x": 10 });
    expect(obj).to.deep.equal({ "x": 10, "y": 2});
  });
});
