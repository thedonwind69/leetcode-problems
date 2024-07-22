# Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

# Return the number of nice sub-arrays.

 

# Example 1:

# Input: nums = [1,1,2,1,1], k = 3
# Output: 2
# Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
# Example 2:

# Input: nums = [2,4,6], k = 1
# Output: 0
# Explanation: There are no odd numbers in the array.
# Example 3:

# Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
# Output: 16
 

# Constraints:

# 1 <= nums.length <= 50000
# 1 <= nums[i] <= 10^5
# 1 <= k <= nums.length

# cheated

class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        # Step 1: Convert nums to an array of 0s and 1s (0 for even, 1 for odd)
        binary_nums = [1 if num % 2 != 0 else 0 for num in nums]
        
        # Step 2: Initialize variables
        prefix_sum = 0
        count_of_prefix = {0: 1}  # Initialize with 0 count
        
        result = 0
        
        # Step 3: Iterate through binary_nums to find subarrays with exactly k odd numbers
        for num in binary_nums:
            prefix_sum += num
            
            # Check how many subarrays ending at current index have exactly k odd numbers
            if prefix_sum - k in count_of_prefix:
                result += count_of_prefix[prefix_sum - k]
            
            # Add current prefix_sum count to the dictionary
            if prefix_sum in count_of_prefix:
                count_of_prefix[prefix_sum] += 1
            else:
                count_of_prefix[prefix_sum] = 1
        
        return result
