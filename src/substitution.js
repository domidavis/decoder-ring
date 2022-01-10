const substitutionModule = (function () {
  const regAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  function isUnique(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (obj[letter]) return false;
      obj[letter] = true;
    }
    return true;
  }


  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const uniqueAlph = isUnique(alphabet);
    if (!uniqueAlph) return false;
    let coded = [];
    if (encode) {
      for (let i = 0; i < 25; i++) {
        coded[regAlphabet[i]] = alphabet[i]
      }
    } else {
      for (let i = 0; i < 25; i++) {
        coded[alphabet[i]] = regAlphabet[i];
      }
    }
    let array = input.toLowerCase().split('');
    let result = array.map((index) => {
      if (index === ' ') return ' ';
      return coded[index]
    })
    return result.join('')
    }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
