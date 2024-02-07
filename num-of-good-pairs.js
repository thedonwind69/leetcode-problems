var numIdenticalPairs = function(nums) {
    const frequencyMap = {};
    let count = 0;
    
    // Count frequencies of each number
    for (let num of nums) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    
    // Calculate number of good pairs using the frequencies
    for (let freq of Object.values(frequencyMap)) {
        count += (freq * (freq - 1)) / 2;
    }
    
    return count;
};
