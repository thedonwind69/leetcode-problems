var findMissingAndRepeatedValues = function(grid) {
    let topNumber = grid.length * grid.length;
    let count = {};
    for (let arr of grid) {
        for (let i of arr) {
            count[i] ? count[i]++ : count[i] = 1;
        }
    }
    let result = [];
    for (let key of Object.keys(count)) {
        if (count[key] == 2) {
            result[0] = key
        }
    }
    for (let i = 1; i<=topNumber; i++) {
        if (!count[i]) {
            result[1] = i
        }
    }
    return result;
};