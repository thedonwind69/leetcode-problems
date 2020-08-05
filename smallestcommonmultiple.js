
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Passed
// smallestCommons([1, 5]) should return a number.
// Passed
// smallestCommons([1, 5]) should return 60.
// Passed
// smallestCommons([5, 1]) should return 60.
// Passed
// smallestCommons([2, 10]) should return 2520.
// Passed
// smallestCommons([1, 13]) should return 360360.
// Passed
// smallestCommons([23, 18]) should return 6056820.

function smallestCommons(arr) {
    var array = arr.sort(function(a, b) {
      return b - a;
    });
    var endOfArray = array[array.length-1];
    var startOfArray = array[0];
  
    var multiplier = 1;
    var biggestNumber = startOfArray;
    var SCM = 0;
  
    for (let i = startOfArray; i >= endOfArray; i--) {
      if ((biggestNumber * multiplier) % i !== 0 ) {
        multiplier += 1;
        i = startOfArray;
      } else {
        SCM = biggestNumber * multiplier;
      }
    }  
    return SCM;
  }
  
var answer = smallestCommons([1, 5]);
console.log(answer);


function smallestCommons(arr) {

  var largerNum = Math.max(...arr);
  var smallerNum = Math.min(...arr);
  var scm = 0;
  var increment = 1;
  for (let i = largerNum; i >= smallerNum; i--) {
    if ((largerNum * increment) % i !== 0 ) {
      increment += 1;
      i = largerNum;
    } else {
      scm = largerNum * increment;
    }
  }
  return scm;
}


smallestCommons([1,5]);