describe("Given a string of html", () => {
  it("can escape it", () => {
    const html = Utilities.escape("<h1>Hello!</h1>");
    expect(html).to.equal("&lt;h1&gt;Hello!&lt;/h1&gt;");
  });
});
