var singleNumber = function(nums) {
    var count = [];
    for (let i=0; i < nums.length; i++) {
        var currentNum = nums[i];
        if (!count.includes(currentNum)) {
           count.push(currentNum); 
        } else {
            var index = count.indexOf(currentNum);
            count.splice(index, 1);
        }
    }
    
    return count.pop();
     
};