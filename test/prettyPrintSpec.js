const JSON = require("../jsdoc.conf.json");

describe("Given a JavaScript Object", () => {
  it("is an object", () => {
    expect(JSON).to.not.be.undefined;
    expect(typeof JSON === "object").to.be.true;
  });

	it("can pretty print", () => {
    const output = Utilities.prettyPrint(JSON);
    expect(output).to.not.be.undefined;
    expect(typeof output === "string").to.be.true;
  });

  it("can pretty print in HTML", () => {
    const output = Utilities.prettyPrintHTML(JSON);
    console.info("out", output);
    const sandbox = document.getElementById("sandbox");
    sandbox.innerHTML = output;
    expect(output).to.not.be.undefined;
    expect(typeof output === "string").to.be.true;
    expect(sandbox.childNodes).to.not.be.undefined;
  });
});