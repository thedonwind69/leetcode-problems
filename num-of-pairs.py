def findNumOfPairs(a, b):
    pairs = []
    
    for i, numA in enumerate(a):
        for j, numB in enumerate(b):
            if numA != "used" and numB != "used":
                if numA > numB:
                    pairs.append([numA, numB])
                    a[i] = "used"
                    b[j] = "used"
                    break
    print(pairs)
                

a = [1, 2, 3]
b = [1, 2, 1]


print(findNumOfPairs(a, b))