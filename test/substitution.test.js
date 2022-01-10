// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by me", () => {
    describe("error handling", () => {
      it("should return false if the alphabet isn't 26 characters", () => {
        const message = "message"
        const alphabet = "quail"
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
      it("should return false if there are duplicate characters in alphabet", () => {
          const message = "message"
          const alphabet = "ielwkahgieowkelgiejwiaosi"
          const actual = substitution(message, alphabet);
          expect(actual).to.be.false;
      });
    });
    describe("encoding a message", () => {
        it("should correctly translate the given phrase", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected);
        })
        it("should maintain spaces", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "MESSAGE";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected);
        });
    });
});