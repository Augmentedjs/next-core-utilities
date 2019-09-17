describe("Given Binary Utilities", () => {

	describe("Given a number", () => {
		it("can format as binary 8 bits", () => {
			const a = Utilities.formatBinary(25, 8);
			expect(a).to.not.equal(25);
			expect(a).to.not.equal("");
			expect(a).to.equal("10011000");
		});

		it("can format as binary 8 bits", () => {
			const a = Utilities.formatBinary(1, 8);
			expect(a).to.not.equal(1);
			expect(a).to.not.equal("");
			expect(a).to.equal("10000000");
		});

		it("can format as binary 8 bits", () => {
			const a = Utilities.formatBinary(128, 8);
			expect(a).to.not.equal(1);
			expect(a).to.not.equal("");
			expect(a).to.equal("00000001");
		});

		it("can format as binary 8 bits", () => {
			const a = Utilities.formatBinary(129, 8);
			expect(a).to.not.equal(1);
			expect(a).to.not.equal("");
			expect(a).to.equal("10000001");
		});

		it("can format as binary 8 bits", () => {
			const a = Utilities.formatBinary(85, 8);
			expect(a).to.not.equal(85);
			expect(a).to.not.equal("");
			expect(a).to.equal("10101010");
		});

		it("can format as binary 16 bits", () => {
			const a = Utilities.formatBinary(36784, 16);
			expect(a).to.not.equal(36784);
			expect(a).to.not.equal("");
			expect(a).to.equal("0000110111110001");
		});

		it("can format as binary 32 bits", () => {
			const a = Utilities.formatBinary(36784, 32);
			expect(a).to.not.equal(36784);
			expect(a).to.not.equal("");
			expect(a).to.equal("00001101111100010000000000000000");
		});
	});

	describe("Given a binary string", () => {
		it("can convert to hex", () => {
			const a = Utilities.binaryToHex("10011000");
			expect(a).to.not.equal("");
			expect(a).to.equal("19");
		});

		it("can convert to hex", () => {
			const a = Utilities.binaryToHex("10101010");
			expect(a).to.not.equal("");
			expect(a).to.equal("55");
		});

		it("can convert to hex", () => {
			const a = Utilities.binaryToHex("11000000");
			expect(a).to.not.equal("");
			expect(a).to.equal("3");
		});

		it("can convert to hex (padded)", () => {
			const a = Utilities.binaryToHex("11000000", true);
			expect(a).to.not.equal("");
			expect(a).to.equal("03");
		});

		it("can convert to hex (padded)", () => {
			const a = Utilities.binaryToHex("11110000", true);
			expect(a).to.not.equal("");
			expect(a).to.equal("0f");
		});

		it("can convert to hex (padded)", () => {
			const a = Utilities.binaryToHex("00001000", true);
			expect(a).to.not.equal("");
			expect(a).to.equal("10");
		});
	});
});
