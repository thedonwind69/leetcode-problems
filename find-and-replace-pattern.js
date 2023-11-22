// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 

// Example 1:

// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
// Example 2:

// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]
 

// Constraints:

// 1 <= pattern.length <= 20
// 1 <= words.length <= 50
// words[i].length == pattern.length
// pattern and words[i] are lowercase English letters.

// medium, string section, 77% acceptance, no hints really

var mapString = function (string) {
    let sSplit = string.split('');
    let count = {};
    let numOfUniqueLetters = 1;
    for (let i = 0 ; i<sSplit.length; i++) {
        let currentLetter = sSplit[i];
        if (i === 0) {
            count[currentLetter] = 1;
        } else {
            if (!count[currentLetter]) {
                numOfUniqueLetters += 1;
                count[currentLetter] = numOfUniqueLetters
            }
        }
    }
    return sSplit.map((letter) => count[letter])
}

var checkIfSame = function(array1, array2) {
    for (let i = 0 ; i<array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true
}

var findAndReplacePattern = function(words, pattern) {
    if (pattern.length == 1) {return words}
    let result = [];
    for (let string of words) {
        if ( checkIfSame(mapString(string), mapString(pattern)) ) {
            result.push(string);
        }
    }
    return result;
};