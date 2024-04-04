# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.

 

# Example 1:

# Input: ransomNote = "a", magazine = "b"
# Output: false
# Example 2:

# Input: ransomNote = "aa", magazine = "ab"
# Output: false
# Example 3:

# Input: ransomNote = "aa", magazine = "aab"
# Output: true
 

class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        ransomNoteCount = {}
        for i, letter in enumerate(ransomNote):
            if letter in ransomNoteCount:
                ransomNoteCount[letter]['count'] += 1
            else:
                ransomNoteCount[letter] = {}
                ransomNoteCount[letter]['count'] = 1
                ransomNoteCount[letter]['checked'] = False
        magazineCount = Counter(magazine)

        for key in magazineCount:
            if key in ransomNoteCount:
                if magazineCount[key] >= ransomNoteCount[key]['count']:
                    ransomNoteCount[key]['checked'] = True
                    continue
                else:
                    return False
            else:
                continue
        

        if any(ransomNoteCount[key]['checked'] == False for key in ransomNoteCount):
            return False
        else:
            return True
        