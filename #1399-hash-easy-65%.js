// You are given an integer n.

// Each number from 1 to n is grouped according to the sum of its digits.

// Return the number of groups that have the largest size.

 

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.
// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
 

// /**
//  * @param {number} n
//  * @return {number}
//  */
var countLargestGroup = function(n) {
    let numArray = []
    for (let i = 1; i<=n; i++) {
        numArray.push(i)
    }
    let numArrayDigitSums = []
    for (let i = 0; i < numArray.length; i++) {
        let splitNum = numArray[i].toString().split("")
        if (splitNum.length > 1) {
            numArrayDigitSums[i] = splitNum.reduce((accum, num) => {
                let intNum = parseInt(num)
                return accum + intNum
            }, 0)
        } else {
            numArrayDigitSums[i] = numArray[i]
        }
    }
    let count = {}
    for (let i = 0; i<numArrayDigitSums.length; i++) {
        if (count[numArrayDigitSums[i]]) {
            count[numArrayDigitSums[i]].push(numArray[i])
        } else {
            count[numArrayDigitSums[i]] = [numArray[i]]
        }
    }
    let keys = Object.keys(count);
    let largestSize = keys.reduce((accum, key) => {
        if (count[key].length > accum) {
            accum = count[key].length
        } 
        return accum
    }, 0)
    return keys.reduce((countOfGroups, key) => {
        if (count[key].length === largestSize) {
            countOfGroups++
        }
        return countOfGroups
    }, 0)
};