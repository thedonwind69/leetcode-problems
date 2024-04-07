#    Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

# A boomerang is a set of three points that are all distinct and not in a straight line.

 

# Example 1:

# Input: points = [[1,1],[2,3],[3,2]]
# Output: true
# Example 2:

# Input: points = [[1,1],[2,2],[3,3]]
# Output: false
   
class Solution(object):
    def isBoomerang(self, points):
         # Extract coordinates of each point
        x1, y1 = points[0]
        x2, y2 = points[1]
        x3, y3 = points[2]
        
        # Check if all points are distinct
        if (x1 == x2 and y1 == y2) or (x1 == x3 and y1 == y3) or (x2 == x3 and y2 == y3):
            return False
        
        # Calculate slopes
        slope1 = (y2 - y1) * (x3 - x1)
        slope2 = (y3 - y1) * (x2 - x1)
        
        # Check if the slopes are different (not collinear)
        return slope1 != slope2