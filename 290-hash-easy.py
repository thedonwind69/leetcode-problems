# Given a pattern and a string s, find if s follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

# Example 1:

# Input: pattern = "abba", s = "dog cat cat dog"
# Output: true
# Example 2:

# Input: pattern = "abba", s = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", s = "dog cat cat dog"
# Output: false
 

# Constraints:

# 1 <= pattern.length <= 300
# pattern contains only lower-case English letters.
# 1 <= s.length <= 3000
# s contains only lowercase English letters and spaces ' '.
# s does not contain any leading or trailing spaces.
# All the words in s are separated by a single space.

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        sentence = s.split(" ")
        countForPattern = {}
        countForSentence = {}
        tracker = 1
        decryptedPattern = ""
        decryptedSentence = ""
        
        for i, letter in enumerate(pattern):
            if i == 0:
                countForPattern[letter] = tracker
                decryptedPattern += str(tracker)
            else:
                if letter in countForPattern:
                    decryptedPattern += str(countForPattern[letter])
                else:
                    tracker += 1
                    countForPattern[letter] = tracker
                    decryptedPattern += str(countForPattern[letter])

        tracker = 1
        for i, letter in enumerate(sentence):
            if i == 0:
                countForSentence[letter] = tracker
                decryptedSentence += str(tracker)
            else:
                if letter in countForSentence:
                    decryptedSentence += str(countForSentence[letter])
                else:
                    tracker += 1
                    countForSentence[letter] = tracker
                    decryptedSentence += str(countForSentence[letter])

        return decryptedPattern == decryptedSentence
