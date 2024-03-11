// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function stringArray(string) {
    return Array.from(string);
  }

  function moveLetter(displayedIndex, shift) {
    let index = (displayedIndex + shift) % 26;
    if (index < 0) {
      index = index + 26
    }
    return alphabet[index];
  }

  function movedArray(string, shift) {
    let changedArray = stringArray(string).map((character) => {
      if (alphabet.indexOf(character) === -1) {
        return character
      }
      return moveLetter(alphabet.indexOf(character), shift);
    });
    return changedArray;
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    const string = input.toLowerCase();
    let newChange = shift;

    if (encode === false) {
      newChange = shift * -1;
    }
    return movedArray(string, newChange).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
