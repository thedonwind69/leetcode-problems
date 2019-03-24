function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var strArray = str.split("");
    var start =  (strArray.length) - target.length;
    var endOfString = strArray.splice(start, (strArray.length - 1));
    if (endOfString.join("") === target) {
      return true;
    }
    return false;
  }
  
confirmEnding("Bastian", "n");