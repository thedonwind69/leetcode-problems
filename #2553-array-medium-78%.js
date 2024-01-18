var separateDigits = function(nums) {
    

    let lastArray = [];
    for (let i of nums) {
        if (i.toString().split("").length > 1) {
            for (let j of i.toString().split("")) {
                lastArray.push(parseInt(j))
            }
        } else {
            lastArray.push(i)
        }
    }
    return lastArray
};