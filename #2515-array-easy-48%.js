// You are given a 0-indexed circular string array words and a string target. A circular array means that the array's end connects to the array's beginning.

// Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.
// Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

// Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

 

// Example 1:

// Input: words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
// Output: 1
// Explanation: We start from index 1 and can reach "hello" by
// - moving 3 units to the right to reach index 4.
// - moving 2 units to the left to reach index 4.
// - moving 4 units to the right to reach index 0.
// - moving 1 unit to the left to reach index 0.
// The shortest distance to reach "hello" is 1.
// Example 2:

// Input: words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
// Output: 1
// Explanation: We start from index 0 and can reach "leetcode" by
// - moving 2 units to the right to reach index 3.
// - moving 1 unit to the left to reach index 3.
// The shortest distance to reach "leetcode" is 1.
// Example 3:

// Input: words = ["i","eat","leetcode"], target = "ate", startIndex = 0
// Output: -1
// Explanation: Since "ate" does not exist in words, we return -1.

// needed few hints from chatgpt but got the right idea on my own

var closetTarget = function(words, target, startIndex) {
    
    if (!words.includes(target)) {
        return -1;
    }

    if (words[startIndex] === target) {
        return 0;
    }

    let shortestDistanceGoingRight = words.length;
    let i = (startIndex + 1) % words.length;
    let counterRight = 1; // Initialize counterRight to 1 since we are already at startIndex
    while (i !== startIndex) {
        let string = words[i];
        counterRight++;
        if (string === target) {
            if (counterRight < shortestDistanceGoingRight) {
                shortestDistanceGoingRight = counterRight;
            }
        }
        i = (i + 1) % words.length;
    }

    let shortestDistanceGoingLeft = words.length;
    let j = (startIndex - 1 + words.length) % words.length;
    let counterLeft = 1; // Initialize counterLeft to 1 since we are already at startIndex
    while (j !== startIndex) {
        let string = words[j];
        counterLeft++;
        if (string === target) {
            if (counterLeft < shortestDistanceGoingLeft) {
                shortestDistanceGoingLeft = counterLeft;
            }
        }
        j = (j - 1 + words.length) % words.length;
    }

    return Math.min(shortestDistanceGoingRight-1, shortestDistanceGoingLeft-1);
};
