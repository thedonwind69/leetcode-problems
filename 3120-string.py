# You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

# Return the number of special letters in word.

 

# Example 1:

# Input: word = "aaAbcBC"

# Output: 3

# Explanation:

# The special characters in word are 'a', 'b', and 'c'.

# Example 2:

# Input: word = "abc"

# Output: 0

# Explanation:

# No character in word appears in uppercase.

# Example 3:

# Input: word = "abBCab"

# Output: 1

# Explanation:

# The only special character in word is 'b'.

 

# Constraints:

# 1 <= word.length <= 50
# word consists of only lowercase and uppercase English letters.

class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        letterCount = {}
        for letter in word:
            lowerVersion = letter.lower()
            upperVersion = letter.upper()
            if lowerVersion not in letterCount:
                if letter.islower():
                    letterCount[lowerVersion] = {lowerVersion: 1 , upperVersion: 0}
                else:
                    letterCount[lowerVersion] = {lowerVersion: 0 , upperVersion: 1}
            else:
                if letter.islower():
                    letterCount[lowerVersion][letter] += 1
                else:
                    letterCount[lowerVersion][upperVersion] += 1
        specialChars = 0
        for key in letterCount:
            currentCount = letterCount[key]
            lowerKey = key.lower()
            upperKey = key.upper()
            if currentCount[lowerKey] > 0 and currentCount[upperKey] > 0:
                specialChars += 1

        return specialChars