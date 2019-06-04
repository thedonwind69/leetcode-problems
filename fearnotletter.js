
function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let startingPoint;
    for (let i = 0; i < alphabet.length; i++) {
      if (str[0] === alphabet[i]) {
        startingPoint = i;
        break;
      }
    }
    let incremement = 0;
    var strSplit = str.split("");
    for (let j = startingPoint; j<alphabet.length; j++) {
      if (strSplit[incremement] !== alphabet[j]) {
        return alphabet[j];
      } else {
        incremement++;
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");

//   fearNotLetter("abce") should return "d".
// Passed
// fearNotLetter("abcdefghjklmno") should return "i".
// Passed
// fearNotLetter("stvwx") should return "u".
// Passed
// fearNotLetter("bcdf") should return "e".
// Passed
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

