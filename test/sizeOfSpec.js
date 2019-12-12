describe("Given and object", () => {
  const object = { "stuff": "MyStuff", "extra": "This is extra" };

  it("can calculate the size in bytes", async () => {
    const result = await Utilities.sizeOf(object);
    expect(result).to.equal(40);
  });

  it("can format a number in bytes", async () => {
    const result = await Utilities.formatByteSize(16777216);
    expect(result).to.equal("16.000 MB");
  });

  it("can calculate the size", async () => {
    const result = await Utilities.memorySizeOf(object);
    expect(result).to.equal("40 bytes");
  });
});
