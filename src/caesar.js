const caesarModule = (function () {

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
