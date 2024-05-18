def guessing(lst, low, high, target):
    if low <= high:
        mid = (low + high) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            return guessing(lst, mid + 1, high, target)
        else:
            return guessing(lst, low, mid - 1, target)
    else:
        return -1  # Target not found

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = guessing(arr, 0, len(arr)-1, 10)
print(result)
