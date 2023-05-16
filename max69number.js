// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

var maximum69Number  = function(num) {
    var numArray = num.toString().split("");
    let max = 0;
    for (let i in numArray) {
        if (numArray[i] == 6) {
            numArray[i] = 9;
            break;
        } 
    }
    if (Number(numArray.join("")) > max) {
        max = Number(numArray.join(""));
    }
    return max;
};