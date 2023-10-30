// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 
// easy, hastable seciton, 49% acceptance

var secondHighest = function(s) {
    let integers = new Set();
    const stringSplit = s.split("")
    for (let i = 0; i<stringSplit.length; i++) {
        let current = stringSplit[i];
        let parsed = parseInt(current);
        console.log(parsed)
        if (parsed || parsed == 0) {
             integers.add(parsed);
        }
    }
    if (integers.size <= 1) {
        return -1;
    } else {
        let sorted = [...integers].sort((a,b) => b-a);
        return sorted[1];
    }
};

// time is o(n)
// space is o(k), where k is the number of unique integers found in the string, which could be less than the length of the string itself