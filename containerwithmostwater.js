// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function(height) {
    var maxWater = 0;
    for (let i = 0; i<height.length; i++) {
        let currentNum1 = height[i];
        for (let j = i+1; j<height.length; j++) {
            let currentNum2 = height[j];
            if (currentNum1 == currentNum2) {
                let times = (j - i) * currentNum1;
                if (times > maxWater) {
                    maxWater = times
                }
            } else if (currentNum1 > currentNum2) {
                let times = (j - i) * (currentNum2)
                if (times > maxWater) {
                    maxWater = times
                }
            } else if (currentNum2 > currentNum1) {
                let times = (j - i) * (currentNum1)
                if (times > maxWater) {
                    maxWater = times
                }
            }
        }
    }
    return maxWater;
};

const height = [1,8,6,2,5,4,8,3,7]
console.log( maxArea(height) );

// passed 55/61 test cases