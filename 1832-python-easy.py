# A pangram is a sentence where every letter of the English alphabet appears at least once.

# Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

# Example 1:

# Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
# Output: true
# Explanation: sentence contains at least one of every letter of the English alphabet.
# Example 2:

# Input: sentence = "leetcode"
# Output: false
 

class Solution(object):
    def checkIfPangram(self, sentence):
        count = {}
        for i, letter in enumerate(sentence):
            if letter in count:
                count[letter] += 1
            else:
                count[letter] = 1
        if len(count) != 26:
            return False
        else:
            return True
