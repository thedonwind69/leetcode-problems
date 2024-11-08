//
# Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

# Return the sum of the three integers.

# You may assume that each input would have exactly one solution.

 

# Example 1:

# Input: nums = [-1,2,1,-4], target = 1
# Output: 2
# Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
# Example 2:

# Input: nums = [0,0,0], target = 1
# Output: 0
# Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 


//

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()  # Sort the array
        closest_sum = float('inf')  # Initialize closest sum to infinity for comparison

        for i in range(len(nums) - 2):  # Loop through each element up to the third-last one
            left, right = i + 1, len(nums) - 1  # Set up two pointers

            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]  # Calculate the sum of three numbers

                # Update closest sum if the current sum is closer to target
                if abs(current_sum - target) < abs(closest_sum - target):
                    closest_sum = current_sum

                # Move pointers to find a closer sum
                if current_sum < target:
                    left += 1
                elif current_sum > target:
                    right -= 1
                else:
                    # If exactly equals the target, this is the closest possible, so return it
                    return current_sum

        return closest_sum
