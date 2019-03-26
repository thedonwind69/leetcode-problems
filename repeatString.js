function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num < 0) {
      return "";
    }
    var stringArray = [];
    for (let i=0; i<num; i++) {
      stringArray.push(str);
    }
    return stringArray.join("");
  }
  
  repeatStringNumTimes("abc", 3);