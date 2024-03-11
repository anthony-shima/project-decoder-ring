// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function duplicateValues(newAlphabet) {
    return newAlphabet.some((character) => {
      return newAlphabet.filter((index) => character === index).length > 1;
    });
  }

  function stringArray(string) {
    return Array.from(string);
  }

  function encodeMessage(inputArray, newAlphabet) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let desiredLetter = trueAlphabet.find((letter) => letter === character);
        return newAlphabet[trueAlphabet.indexOf(desiredLetter)];
      }
    }).join("")
  }


  function decodeMessage(inputArray, newAlphabet) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let desiredCharacter = newAlphabet.find((indexCharacter) => indexCharacter === character);
        return trueAlphabet[newAlphabet.indexOf(desiredCharacter)];
      }
    }).join("")
  }

  function substitution(input, alphabet, encode = true) {
    // test to make sure alphabet length is 26 or missing
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    if (!input) {
      return false;
    }

    const inputArray = stringArray(input.toLowerCase());
    const newAlphabet = stringArray(alphabet.toLowerCase());

    if (duplicateValues(newAlphabet)) {
      return false;
    }
    if (encode) {
      return encodeMessage(inputArray, newAlphabet);
    }
    if (!encode) {
      return decodeMessage(inputArray, newAlphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
