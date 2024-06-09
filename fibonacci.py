def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    nums = [0, 1]
    while len(nums) <= num:
        nums.append(nums[len(nums) - 1] + nums[len(nums)-2])
    return nums[len(nums)-1]

test1 = fibonacci(5)

test2 = fibonacci(12)

print(test1)

print(test2)