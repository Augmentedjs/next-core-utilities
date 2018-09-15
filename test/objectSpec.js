describe("Given isObject", () => {
  const o = {}, p = 123, f = () => { return true; };

  it("checks if object is an object", () => {
    expect(Utilities.isObject(o)).to.be.true;
  });
  it("checks if number is not an object", () => {
    expect(Utilities.isObject(p)).to.be.false;
  });
  it("checks if function is an object", () => {
    expect(Utilities.isObject(f)).to.be.true;
  });
});
