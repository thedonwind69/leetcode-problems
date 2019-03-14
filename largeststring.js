function findLongestWordLength(str) {
    var strarray = str.split(" ");
    let largestLength = 0;
    strarray.forEach((string) => {
      if (string.length > largestLength) {
        largestLength = string.length;
      }
    });
    return largestLength;
  }
  
  console.log(
       findLongestWordLength("The quick brown fox jumped over the lazy dog")
)
 