describe("Given.isFunction", () => {
  const o = {}, p = 123, f = () => { return true; };

  it("is defined", () => {
    expect(Utilities.isFunction).to.not.be.undefined;
  });

  it("checks if object is an function", () => {
    expect(Utilities.isFunction(o)).to.be.false;
  });
  it("checks if number is not an function", () => {
    expect(Utilities.isFunction(p)).to.be.false;
  });
  it("checks if function is not an function", () => {
    expect(Utilities.isFunction(f)).to.be.true;
  });

  it("returns true for a function call", () => {
    const t = () => {};
    expect(Utilities.isFunction(t)).to.be.true;
  });

  it("returns false for a string value", () => {
    const t = "x";
    expect(Utilities.isFunction(t)).to.be.false;
  });

  it("returns false for a property call", () => {
    const t = { stuff: "stuff"};
    expect(Utilities.isFunction(t.stuff)).to.be.false;
  });

  it("returns false for an Array", () => {
    const t = [];
    expect(Utilities.isFunction(t)).to.be.false;
  });

  it("returns false for an Object", () => {
    const t = {};
    expect(Utilities.isFunction(t)).to.be.false;
  });
});
