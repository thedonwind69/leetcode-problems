const smallestDistance = (stockPrices) => {
    var largestProfit = 0;
    var largestProfitPositions = null;
    for (let i = 0; i < stockPrices.length; i++) {
        var currentStock1 = stockPrices[i];
        for (let j = i + 1; j < stockPrices.length; j++) {
            var currentStock2 = stockPrices[j];
            if (currentStock1 < currentStock2) {
                if ((currentStock2 - currentStock1) > largestProfit) {
                    largestProfit =  (currentStock2 - currentStock1);
                    largestProfitPositions = [i, j];
                }
            }
        }
    }
    return largestProfitPositions;
}

var test = [35, 69, 77, 66, 55, 66, 23, 15, 66, 100, 100, 44, 70];
var result = smallestDistance(test);
console.log(result);