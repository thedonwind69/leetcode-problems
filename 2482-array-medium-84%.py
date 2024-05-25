# You are given a 0-indexed m x n binary matrix grid.

# A 0-indexed m x n difference matrix diff is created with the following procedure:

# Let the number of ones in the ith row be onesRowi.
# Let the number of ones in the jth column be onesColj.
# Let the number of zeros in the ith row be zerosRowi.
# Let the number of zeros in the jth column be zerosColj.
# diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
# Return the difference matrix diff.

 

class Solution(object):
    def onesMinusZeros(self, grid):
        n = len(grid)
        m = len(grid[0])
        row = [0] * n
        col = [0] * m
        diff = [[0] * m for _ in range(n)]

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    row[i] += grid[i][j]
                    col[j] += grid[i][j]

        for i in range(n):
            for j in range(m):
                diff[i][j] = (2 * row[i] - n) + (2 * col[j] - m)

        return diff
        