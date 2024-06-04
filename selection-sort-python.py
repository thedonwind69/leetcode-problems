def selectionSort(array):

    for i in range(len(array)-1):
        
        indexSmallest = i
        for j in range(i+1, len(array)):
            if array[j] < array[indexSmallest]:
                indexSmallest = j
        temp = array[i]
        array[i] = array[indexSmallest]
        array[indexSmallest] = temp

    return array

arr = [3, 4, 7, 2, 1, 9, 8]
result = selectionSort(arr)
print(result)