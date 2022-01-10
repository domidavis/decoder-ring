// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "I am a banana";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount greater than 25", () => {
        const message = "I am a banana";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "I am a banana";
        const shift = -48;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
});
describe("encoding a message", () => {
    it("should return capital letters as lowercase letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";

        expect(actual).to.equal(expected);
    });
    it("should leave non-alphabetical characters as is", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
        
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";

        expect(actual).to.equal(expected);
    });
});