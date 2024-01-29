class Solution(object):
    def maxProfit(self, prices):
        leftPointer = 0;
        rightPointer = 1;
        maxProfit = 0;
        while rightPointer < len(prices):
            buy = prices[leftPointer]
            sell = prices[rightPointer]
            if buy < sell:
                if (sell - buy) > maxProfit:
                    maxProfit = sell - buy
            else:
                leftPointer = rightPointer
            rightPointer += 1
        return maxProfit