
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

	describe("Given isString", () => {
		const o = {}, n = 123, p = "123", f = () => { return true; };

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
});
