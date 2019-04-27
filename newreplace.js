function myReplace(str, before, after) {
    var strArray = str.split(" ");
    for (let i = 0; i<strArray.length; i++) {
      var currentWord = strArray[i];
      if (currentWord === before) {
        if (currentWord[0] === currentWord[0].toUpperCase()) {
          var newAfter = after.split("");
          var capLetter = newAfter[0].toUpperCase();
          newAfter[0] = capLetter;
          strArray[i] = newAfter.join("");
        } else {
          strArray[i] = after;
        }
      } 
    }
    return strArray.join(" ");
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");