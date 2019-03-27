function truncateString(str, num) {
    // Clear out that junk in your trunk
    var strArray = str.split("");
    var newStrArray = [];
    if (strArray.length > num) {
      for (let i=0; i<num; i++) {
        newStrArray.push(strArray[i]);
      }
    } else {
      return str;
    }
    newStrArray.push("...");
    return newStrArray.join("");
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);