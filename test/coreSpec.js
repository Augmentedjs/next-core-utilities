
describe("Given", () => {

	describe("Given ES6 or higher", () => {
		it("has Number.isInteger", () => {
			expect(Number.isInteger).to.not.be.undefined;
		});
		it("has String.endsWith", () => {
			expect(String.prototype.endsWith).to.not.be.undefined;
		});
		it("has Array.find", () => {
			expect(Array.prototype.find).to.not.be.undefined;
		});
		it("has Array.includes", () => {
			expect(Array.prototype.includes).to.not.be.undefined;
		});
	});

	describe("Given an exec", () => {
		const object = { stuff: () => { return true; } };

		it("is defined", () => {
			expect(Utilities.exec).to.not.be.undefined;
		});

		it("can exec a function by name", () => {
			expect(Utilities.exec("stuff", object)).to.be.true;
		});
	});

	describe("Given result", () => {
		it("is defined", () => {
			expect(Utilities.result).to.not.be.undefined;
		});

		it("returns the function call", () => {
			const t = { test: () => { return true; } };
			expect(Utilities.result(t, "test")).to.be.true;
		});

		it("returns the property", () => {
			const t = { test: true };
			expect(Utilities.result(t, "test")).to.be.true;
		});
	});



	describe("Given has", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("checks if an object has a key", () => {
			expect(Utilities.has(o, "x")).to.be.true;
		});
		it("checks if an object does not have a key", () => {
			expect(Utilities.has(o, "xx")).to.be.false;
		});
		it("checks if an object has a function key", () => {
			expect(Utilities.has(o, "y")).to.be.true;
		});
	});

	

	describe("Given isDefined", () => {
		const y = {}, n = undefined, nn = null;

		it("checks if object is defined", () => {
			expect(Utilities.isDefined(y)).to.be.true;
		});
		it("checks if undefined is not defined", () => {
			expect(Utilities.isDefined(n)).to.be.false;
		});
		it("checks if null is defined", () => {
			expect(Utilities.isDefined(nn)).to.be.true;
		});
	});

	describe("Given allKeys", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("returns all keys", () => {
			const k = Utilities.allKeys(o);

			expect(k).to.deep.equal(["x", "y"]);
		});
	});

	describe("Given object create", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("can create an object", () => {
			const k = Utilities.create(o, { "z": "z"});
			expect(k).to.not.be.undefined;
			expect(k.z).to.equal("z");
		});
	});

	describe("Given some", () => {
		let arr;
		const isLargerThanTen = (element, index, array) => {
  		return element >=10;
		};
		beforeEach(() => {
			arr = [10, 9, 8];
		});
		afterEach(() => {
			arr = null;
		});
		it("can create an object", () => {
			const result = arr.some(isLargerThanTen);
			expect(result).to.not.be.undefined;
			expect(result).to.be.true;
		});
	});
});
