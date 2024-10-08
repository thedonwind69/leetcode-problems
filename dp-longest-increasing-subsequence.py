# Problem: Longest Increasing Subsequence (LIS)
# Given an array of integers, find the length of the longest subsequence such that all elements of the subsequence are sorted in increasing order.

# Example:
# code
# Input:  arr[] = [10, 22, 9, 33, 21, 50, 41, 60, 80]
# Output: 6
# Explanation: The longest increasing subsequence is [10, 22, 33, 50, 60, 80].
# Approach:
# Define a DP array dp[] where dp[i] represents the length of the longest increasing subsequence that ends with arr[i].
# Initialize all values in dp[] to 1, because the minimum length of LIS for any single element is 1 (the element itself).
# For each element arr[i], check all previous elements arr[j] where j < i. If arr[j] < arr[i], update dp[i] as dp[i] = max(dp[i], dp[j] + 1).
# Finally, the answer will be the maximum value in dp[].

def longest_increasing_subsequence(arr):
    firstNum = arr[0]
    increasingNums = []
    for i, num in enumerate(arr):
        if i > 0:
            if num > firstNum:
                if i == 1:
                    increasingNums.append(firstNum)
                increasingNums.append(num)
                firstNum = num
    return len(increasingNums)

        


# Example usage
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longest_increasing_subsequence(arr))  # Output: should be 6
