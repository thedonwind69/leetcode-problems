# Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

# Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

# Example 1:

# Input: arr = [2,2,3,4]
# Output: 2
# Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
# Example 2:

# Input: arr = [1,2,2,3,3,3]
# Output: 3
# Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
# Example 3:

# Input: arr = [2,2,2,3,3]
# Output: -1
# Explanation: There are no lucky numbers in the array.

class Solution(object):
    def findLucky(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        i = 0
        count = {}
        while i < len(arr):
            if arr[i] in count:
                count[arr[i]] += 1
            else:
                count[arr[i]] = 1
            i += 1

        j = 0
        largestLuckyNumber = 0
        while j < len(arr):
            if arr[j] == count[arr[j]] and arr[j] > largestLuckyNumber:
                largestLuckyNumber = arr[j]
            j += 1
        if largestLuckyNumber == 0:
            return -1
        return largestLuckyNumber
    
# Create an instance of the Solution class
solution = Solution()

# Call the findLucky method and print the result
result = solution.findLucky([2, 2, 3, 4])
print(result)