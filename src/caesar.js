// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const newMessage = [];
    if (!encode) {
      shift = -shift;
    }
    for (let i = 0; i < input.length; i++) {
        if (alphabet.includes(input[i].toLowerCase())) {
           let letterIndex = alphabet.findIndex(letter => letter === input[i].toLowerCase());
           let newLetterIndex = letterIndex + shift;
            if (newLetterIndex > 25) {
              newLetterIndex -= 26;
            }
            else if (newLetterIndex < 0) {
              newLetterIndex += 26;
            }
           newMessage.push(alphabet[newLetterIndex]);
        }
        else {
          newMessage.push(input[i]);
        }

      }
      return newMessage.join('');
    }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
