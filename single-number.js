var singleNumber = function(nums) {
    var count = {};
    nums.forEach((num) => {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    })
    
    console.log(Object.keys(count));

    for (let i = 0; i< Object.keys(count).length; i++  ) {
        let key = Object.keys(count)[i];
        if (count[key] === 1) {
            
            return parseInt(key);
        }
   
    }
        
    
};

console.log(singleNumber([2,2,1]));