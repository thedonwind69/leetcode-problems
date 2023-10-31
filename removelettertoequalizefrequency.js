// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot choose to do nothing.
 

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
 

// Constraints:

// 2 <= word.length <= 100
// word consists of lowercase English letters only.


// easy section, hashtable, but only 17% acceptance and everyone in discussion said this was HARDDDDDDDDD.
// Solved with only 1 hint from ChatGPT
// LETS GOOOOOOOOOO ! !!!


// O(n) time and O(1) space

var areAllValuesSame = function(obj) {
    const values = Object.values(obj);
    if (values.length === 0) {
      return true; // An empty object is considered to have the same values.
    }
    
    const firstValue = values[0];
    
    for (let i = 1; i < values.length; i++) {
      if (values[i] !== firstValue) {
        return false; // If any value is different from the first, return false.
      }
    }
    
    return true; // All values are the same.
  }
  
  var equalFrequency = function(word) {
    let wordSplit = word.split("");

    let count = {};

    // iterate through the string to count frequency of each letter
    for (let i = 0; i<wordSplit.length; i++) {
        let currentLetter = wordSplit[i];
        count[currentLetter] ? count[currentLetter] += 1 : count[currentLetter] = 1;
    }

    for (let i = 0; i < wordSplit.length; i++) {
        // iterate through the string again, and on each letter, decrease the frequency by 1
        let currentLetter = wordSplit[i];
        // make a copy of the count object to work with
        let copyOfCount = { ...count };
        copyOfCount[currentLetter] -= 1;
        if (copyOfCount[currentLetter] === 0) {
            // delete the keyvalue from the object if the new value is 0
            delete copyOfCount[currentLetter];
            // then check if the remaining values are all the same, if so then its true
            if (areAllValuesSame(copyOfCount)) {
                return true;
            } else {
              // otherwise, reset the copy of the object to the original and continue to the next iteration
                copyOfCount = {...count};
                continue;
            }
        } else {
             if (areAllValuesSame(copyOfCount)) {
                return true;
            } else {
                copyOfCount = {...count};
                continue;
            }
        }
    }
 
    // returns false at the end if the loop never made it to true
    return false;
};