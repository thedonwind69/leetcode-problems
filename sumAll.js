// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    var arrSort = arr.sort(function (a, b) {return a-b});
    var sumOfMiddle = 0;
    for (let i = arrSort[0]+1; i < arrSort[arrSort.length-1]; i++) {
      sumOfMiddle += i;
    }
    return sumOfMiddle + arrSort[0] + arrSort[arrSort.length-1];
  }
  
  sumAll([1, 4]);

// sumAll([1, 4]) should return a number.
// Passed
// sumAll([1, 4]) should return 10.
// Passed
// sumAll([4, 1]) should return 10.
// Passed
// sumAll([5, 10]) should return 45.
// Passed
// sumAll([10, 5]) should return 45.