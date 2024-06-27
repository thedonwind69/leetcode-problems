# Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

# Example 1:


# Input: nums = [1,0,0,0,1,0,0,1], k = 2
# Output: true
# Explanation: Each of the 1s are at least 2 places away from each other.
# Example 2:


# Input: nums = [1,0,0,1,0,1], k = 2
# Output: false
# Explanation: The second 1 and third 1 are only one apart from each other.


class Solution(object):
    def kLengthApart(self, nums, k):
        prev1Index = None
        for i, num in enumerate(nums):
            if prev1Index == None:
                if num == 1:
                    prev1Index = i
            else:
                if num == 1:
                    if abs(i - prev1Index) < k+1:
                        return False
                    else:
                        prev1Index = i
        return True
        