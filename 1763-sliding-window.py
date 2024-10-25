# A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

# Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

# Example 1:

# Input: s = "YazaAay"
# Output: "aAa"
# Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
# "aAa" is the longest nice substring.
# Example 2:

# Input: s = "Bb"
# Output: "Bb"
# Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
# Example 3:

# Input: s = "c"
# Output: ""
# Explanation: There are no nice substrings.


 from collections import Counter

class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        count = Counter(s)

        if len(s) == 1:
            return ""

        print(count)   

        allSubStrings = []
        runningString = ""
        
        for i in range(len(s)):
            runningString += s[i]
            for j in range(i+1, len(s)):
                runningString += s[j]
                allSubStrings.append(runningString)
            allSubStrings.append(runningString)
            runningString = ""
        
        print(allSubStrings)
        goodOnes = []
        for subString in allSubStrings:
            countOfSubString = Counter(subString)
            good = True
            for letter in subString:
                lowerVersion = letter.lower()
                upperVersion = letter.upper()
                if lowerVersion not in countOfSubString or upperVersion not in countOfSubString:
                    good = False
                    break
            if good:
                goodOnes.append(subString)
        
        newLongest = 0
        for subString in goodOnes:    
            newLongest = max(newLongest, len(subString))
        for subString in goodOnes:
            if len(subString) == newLongest:
                return subString
        return ""    
