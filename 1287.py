# Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

# Example 1:

# Input: arr = [1,2,2,6,6,6,6,7,10]
# Output: 6
# Example 2:

# Input: arr = [1,1]
# Output: 1



class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        count = {}
        for num in arr:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1
        quarterOfTime = len(arr) * .25
        for key in count:
            if count[key] > quarterOfTime:
                return key
