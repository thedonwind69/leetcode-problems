// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

const isIntegerOrNot = (args) => {
    for (let i = 0; i<args.length; i++) {
      if (!Number.isInteger(args[i])) {
        return false;
      }
    }
    return true;
  }
  
function addTogether() {
    var args = arguments;
    if (isIntegerOrNot(args)) {
      if (args.length === 1) {
        return function (arg) {
            if (Number.isInteger(arg)) {
                return arg + args[0];
            } else {
                return undefined;
            }
        }
      }
    } else {
      return undefined;
    }
    return args[0] + args[1];
  }
  
  console.log(  addTogether(2)([3])   )

// addTogether(2, 3) should return 5.
// Passed
// addTogether(2)(3) should return 5.
// Passed
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// Passed
// addTogether(2, "3") should return undefined.
// Passed
// addTogether(2)([3]) should return undefined.