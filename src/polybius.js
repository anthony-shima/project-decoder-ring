const polybiusModule = (function () {

  const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };

  const reversePolybiusSquare = {}

  for (let letter in polybiusSquare) {
    const numberPair = polybiusSquare[letter];

    if (reversePolybiusSquare[numberPair]) {
      reversePolybiusSquare[numberPair] = `(${reversePolybiusSquare[numberPair]}/${letter})`
    } else {
      reversePolybiusSquare[numberPair] = letter;
    }

  }

  function stringArray(string) {
    return Array.from(string);
  }

  function encodeInput(input) {
    const array1 = stringArray(input.toLowerCase());
    return array1.map(character => {
      if (character === " ") {
        return character;
      } else {
        return polybiusSquare[character];
      }
    }).join("");
  }

  function decodeInput(input) {
    const array1 = stringArray(input);
    const decodedArray = [];
    for (let i = 0; i < array1.length; i++) {
      const index = array1[i];
      if (index === " ") {
        decodedArray.push(index);
      }
      else {
        let tens = index;
        let ones = array1[i + 1];
        const numberKey = tens + ones;
        i = i + 1;
        decodedArray.push(reversePolybiusSquare[numberKey]);
      }
    }
    return decodedArray.join("");
  }



  function polybius(input, encode = true) {

    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      } else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
