// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

var luckyNumbers  = function(matrix) {
    
    var luckyNumbers = [];

    for (let i in matrix) {
        let currentArray = matrix[i];
        var smallestInCurrentArray = Math.min(...currentArray);
        for (let j in currentArray) {
            let currentNum = currentArray[j];
            var currentColumn = [];
            for (let k in matrix) {
                currentColumn.push(matrix[k][j]);
            }
            var maxInCurrentColumn = Math.max(...currentColumn);
            if (currentNum === smallestInCurrentArray && currentNum === maxInCurrentColumn) {
                luckyNumbers.push(currentNum);
            }
        }
    }

    return luckyNumbers;

};

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))