# Given a string licensePlate and an array of strings words, find the shortest completing word in words.

# A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

# For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

# Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

 

# Example 1:

# Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
# Output: "steps"
# Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
# "step" contains 't' and 'p', but only contains 1 's'.
# "steps" contains 't', 'p', and both 's' characters.
# "stripe" is missing an 's'.
# "stepple" is missing an 's'.
# Since "steps" is the only word containing all the letters, that is the answer.
# Example 2:

# Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
# Output: "pest"
# Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}

        countForLicensePlate = {}
        for i, letter in enumerate(licensePlate):
            if letter.lower() in alphabet:
                if letter.lower() in countForLicensePlate:
                    countForLicensePlate[letter.lower()] += 1
                else:
                    countForLicensePlate[letter.lower()] = 1
        wordsThatMatch = []
        for word in words:
            wordLetterCount = {}
            hasAll = True
            for i, letter in enumerate(word):
                if letter in wordLetterCount:
                    wordLetterCount[letter] += 1
                else:
                    wordLetterCount[letter] = 1
            for key in countForLicensePlate:
                if key not in wordLetterCount:
                    hasAll = False
                    break
                else:
                    if wordLetterCount[key] < countForLicensePlate[key]:
                        hasAll = False
                        break
            if hasAll == True:
                wordsThatMatch.append(word)
        sorted_words = sorted(wordsThatMatch, key=len)
        shortestLength = len(sorted_words[0])
        for word in wordsThatMatch:
            if len(word) == shortestLength:
                return word