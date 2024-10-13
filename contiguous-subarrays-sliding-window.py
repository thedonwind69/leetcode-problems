def count_subarrays_with_product_less_than_k(numbers, k):
    if k <= 0:  # If k is zero or negative, no subarray can have a valid product
        return 0

    product = 1  # Initialize the product of elements in the current window
    count = 0    # To count valid subarrays
    left = 0     # Left boundary of the sliding window

    # Iterate through the array using 'right' as the right boundary of the window
    for right in range(len(numbers)):
        product *= numbers[right]  # Multiply the current element into the product

        # Shrink the window from the left if the product exceeds k
        while product > k and left <= right:
            product //= numbers[left]  # Remove the leftmost element from the product
            left += 1                 # Move the left boundary to the right

        # Count all valid subarrays that end at 'right'
        # These are subarrays from 'left' to 'right'
        count += right - left + 1

    return count

# Example usage:
numbers = [2, 3, 4]
k = 6
result = count_subarrays_with_product_less_than_k(numbers, k)
print(result)  # Output will be 4

# The sliding window approach is a commonly used technique for solving problems that involve subarrays, and I totally get that it can be confusing at first, especially if you're used to brute force or nested loops. Let’s break it down, line by line, and I’ll explain how it works to solve the problem of finding the number of subarrays with a product less than or equal to a given value k.

# Problem Recap:
# You need to find all contiguous subarrays where the product of elements is less than or equal to k.

# Sliding Window Approach Breakdown:
# Here's the general idea behind the sliding window method:

# Initialize variables:


# let product = 1;
# let count = 0;
# let left = 0;
# product: This will hold the current product of the subarray.
# count: This will count the number of valid subarrays.
# left: This is the left pointer of our sliding window.
# Loop through the array with the right pointer:


# for (let right = 0; right < numbers.length; right++) {
#     product *= numbers[right];
# right: This is the right pointer of the window. It starts at the first element and moves to the right, growing the window.
# product *= numbers[right]: Multiply the current product by the value of the number at index right. This adds the current element to the window.
# Shrink the window if the product is too large:


#     while (product > k && left <= right) {
#         product /= numbers[left];
#         left++;
#     }
# while (product > k && left <= right): If the product of the current subarray is greater than k, we need to shrink the window from the left.
# product /= numbers[left]: This divides the product by the number at the left pointer to shrink the window.
# left++: Move the left pointer to the right to further shrink the window. This excludes the leftmost number from the current subarray.
# Count the number of valid subarrays:


#     count += right - left + 1;
# count += right - left + 1: This is the key part. Every time we get a valid subarray (when the product is less than or equal to k), we count all the subarrays that end at right. The number of these subarrays is right - left + 1 because for every position between left and right, we get a new subarray.
# Example Walkthrough (Step-by-step):
# Let's take numbers = [2, 3, 4] and k = 6.

# Initial values: product = 1, left = 0, count = 0.

# Right = 0:

# We multiply product = product * numbers[0] = 1 * 2 = 2.
# Since 2 <= 6, we count all subarrays ending at right = 0.
# There’s only one: [2]. So, count = 1.
# Right = 1:

# Multiply product = product * numbers[1] = 2 * 3 = 6.
# Since 6 <= 6, we count all subarrays ending at right = 1.
# There are two: [3] and [2, 3]. So, count = 1 + 2 = 3.
# Right = 2:

# Multiply product = product * numbers[2] = 6 * 4 = 24.
# Since 24 > 6, we need to shrink the window.
# We divide product = product / numbers[left] = 24 / 2 = 12 and move left to 1.
# Now 12 > 6, so we shrink again: product = product / numbers[left] = 12 / 3 = 4 and move left to 2.
# Now, product = 4 <= 6, so we count the subarray ending at right = 2. The subarray is [4].
# Add 1 to the count: count = 3 + 1 = 4.
# Final Count:
# The total number of subarrays where the product is less than or equal to k = 6 is 4.

# Pros of Sliding Window:
# Efficiency: This solution runs in O(n), much faster than the brute force O(n²) solution. The key is that both the left and right pointers only move forward, never backward, keeping the time complexity linear.
# Simplicity: Once understood, the sliding window approach is easier to code and reason about for problems involving contiguous subarrays.
# Cons of Sliding Window:
# Product of Zeros: If the array contains zeros, the algorithm may need adjustments, since multiplying by zero will always reset the product.
# Not Intuitive: It can be tricky to wrap your head around at first because it’s a dynamic approach and requires careful bookkeeping of indices and window boundaries.