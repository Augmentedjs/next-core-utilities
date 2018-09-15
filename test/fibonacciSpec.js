describe("Given fibonacci", () => {
  it("can get a number in a sequence", () => {
    const result = Utilities.fibonacci(12);
    expect(result).to.not.be.undefined;
    expect(result).to.equal(144);
  });
  it("can create a sequence", () => {
    const result = Utilities.fibonacciSequence(13);
    expect(result).to.not.be.undefined;
    expect(result).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });
});
