function largestOfFour(arr) {
    var largestNumbers = [];
    for (let i=0; i<arr.length; i++) {
         var currentArray = arr[i];
         let largestNumber = currentArray[0];
        for (let j=1; j<currentArray.length; j++) {
          var currentNumber = currentArray[j];
            if (currentNumber > largestNumber) {
              largestNumber = currentNumber;
            }
        }
        largestNumbers.push(largestNumber);
    }
    return largestNumbers;
}
  
console.log(
    largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
)
//should return [25, 48, 21, -3]