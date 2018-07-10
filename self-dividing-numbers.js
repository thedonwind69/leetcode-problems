// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var selfDividingNumbers = function(left, right) {
    var array = [];
    while (left <= right) {
        let splitNum = left.toString().split("");
        let good = true;
        splitNum.forEach((num) => {
            let number = parseInt(num);
            if ((left % number !== 0) || (number === 0)) {
                good = false;
            } 
            
        })
        if (good) {
            array.push(left);
        }
        
        left++;
    }
    
    return array;
    
};

var left = 1, right = 22;
console.log(selfDividingNumbers(left, right));
console.log("SEX");