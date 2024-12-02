# Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

# Example 1:

# Input: words = ["bella","label","roller"]
# Output: ["e","l","l"]
# Example 2:

# Input: words = ["cool","lock","cook"]
# Output: ["c","o"]
 

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 100
# words[i] consists of lowercase English letters.

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        allLetters = set()
        for word in words:
            for letter in word:
                if letter not in allLetters:
                    allLetters.add(letter)
        listOfLetters = list(allLetters)
        commonChars = []
        setOfWords = []
        for word in words:
            listVer = list(word)
            setVer = set(listVer)
            setOfWords.append(setVer)
        for letter in listOfLetters:
            common = True
            for wordSet in setOfWords:
                if letter not in wordSet:
                    common = False
                    break
            if common == True:
                commonChars.append(letter)
        return commonChars
      
                
