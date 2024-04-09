# Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

# answer.length == nums.length.
# answer[i] = |leftSum[i] - rightSum[i]|.
# Where:

# leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
# rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
# Return the array answer.

 

# Example 1:

# Input: nums = [10,4,8,3]
# Output: [15,1,11,22]
# Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
# The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
# Example 2:

# Input: nums = [1]
# Output: [0]
# Explanation: The array leftSum is [0] and the array rightSum is [0].
# The array answer is [|0 - 0|] = [0].
 
class Solution(object):
    def leftRightDifference(self, nums):
        result = []
        for i in range(len(nums)):
            leftSum = 0
            rightSum = 0
            if i == 0:
                leftSum = 0
                for j in range(i+1, len(nums)):
                    rightSum += nums[j]
                result.append(abs(leftSum - rightSum))
            elif i == len(nums)-1:
                rightSum = 0
                for j in range(i):
                    leftSum += nums[j]
                result.append(abs(leftSum - rightSum))
            else:
                for j in range(i):
                    leftSum += nums[j]
                for k in range(i+1, len(nums)):
                    rightSum += nums[k]
                result.append(abs(leftSum - rightSum))

        return result
