# You are given two strings s and t. In one step, you can append any character to either s or t.

# Return the minimum number of steps to make s and t anagrams of each other.

# An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

# Example 1:

# Input: s = "leetcode", t = "coats"
# Output: 7
# Explanation: 
# - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
# - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
# "leetcodeas" and "coatsleede" are now anagrams of each other.
# We used a total of 2 + 5 = 7 steps.
# It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
# Example 2:

# Input: s = "night", t = "thing"
# Output: 0
# Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
 

class Solution(object):
    def minSteps(self, s, t):
        countS = {}
        countT = {}
        letters = []
        for letter in s:
            if letter in countS:
                countS[letter] += 1
            else:
                countS[letter] = 1
            
        for letter in t:
            if letter in countT:
                countT[letter] += 1
            else:
                countT[letter] = 1
            
        numOfSteps = 0

       # Use a set to keep track of all unique letters in both strings
        all_letters = set(countS.keys()).union(set(countT.keys()))

        # Calculate the difference in character counts
        for letter in all_letters:
            count_in_s = countS.get(letter, 0)
            count_in_t = countT.get(letter, 0)
            numOfSteps += abs(count_in_s - count_in_t)
        
        return numOfSteps


        