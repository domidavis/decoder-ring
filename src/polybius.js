const polybiusModule = (function () {

  const numberLetters = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    if (encode) {
      let numberString = "";
      const message = input.toLowerCase();
      for (let letter of message) {
        if (letter === " ") {
          numberString += letter;
        }
        for (let key in numberLetters) {
          if (key === letter) {
            numberString += numberLetters[key];
          }
        }
      }
      return numberString;
    } else if (!encode) {
      if (input.split(" ").join("").length % 2 === 1) return false;
      let codedNumbers = input.split(" ");
      let decodedMessage = [];
      for (let number of codedNumbers) {
        let decodedWord = "";
        for (let i = 0; i < number.length; i += 2) {
          let value = number[i].toString() + number[i + 1].toString();
          for (let key in numberLetters) {
            if (numberLetters[key] == value) {
              decodedWord += key;
            }
          }
        }
        decodedMessage.push(decodedWord);
      }

      return decodedMessage.join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
