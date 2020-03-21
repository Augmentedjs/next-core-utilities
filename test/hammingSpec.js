describe("Given two numbers", () => {
	it("can get the hamming distance of 1000 and 2000", () => {
		expect(Utilities.hammingDistance(1000, 2000)).to.equal(4);
	});

	it("can get the hamming distance of '1000' and '2000'", () => {
		expect(Utilities.hammingDistance("1000", "2000")).to.equal(1);
	});

	it("can get the hamming distance of 1234 and 3456", () => {
		expect(Utilities.hammingDistance(1234, 3456)).to.equal(5);
	});

	it("can get the hamming distance of 1010 and 1101", () => {
		expect(Utilities.hammingDistance(1010, 1101)).to.equal(10);
	});

	it("can get the hamming distance of '1010' and '1101'", () => {
		expect(Utilities.hammingDistance("1010", "1101")).to.equal(3);
	});

	it("can get the hamming distance of Bob and Robert", () => {
		expect(Utilities.hammingDistance("Bob", "Robert")).to.equal(6);
	});

	it("can get the hamming distance of 'Apple' and 'Sample'", () => {
		expect(Utilities.hammingDistance("Apple", "Sample")).to.equal(3);
	});

	it("can get the hamming distance of Bob and Rob", () => {
		expect(Utilities.hammingDistance("Bob", "Rob")).to.equal(1);
	});
});
