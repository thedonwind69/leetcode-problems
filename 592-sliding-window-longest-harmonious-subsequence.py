# We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

# Given an integer array nums, return the length of its longest harmonious 
# subsequence
#  among all its possible subsequences.

 

# Example 1:

# Input: nums = [1,3,2,2,5,2,3,7]

# Output: 5

# Explanation:

# The longest harmonious subsequence is [3,2,2,2,3].

# Example 2:

# Input: nums = [1,2,3,4]

# Output: 2

# Explanation:

# The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

# Example 3:

# Input: nums = [1,1,1,1]

# Output: 0

# Explanation:

# No harmonic subsequence exists.

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        sortedVersion = sorted(nums)
        freq = Counter(nums)  # Count the frequency of each number
        print(sortedVersion)
        setVersion = set(sortedVersion)
        listVersion = sorted(list(setVersion))
        print(listVersion)
        left = 0
        right = 1
        longest = 0
        while right < len(listVersion):
            if abs(listVersion[right] - listVersion[left]) == 1:
                if freq[listVersion[right]] + freq[listVersion[left]] > longest:
                    longest = freq[listVersion[right]] + freq[listVersion[left]]
            
            left += 1
            right += 1
        return longest
