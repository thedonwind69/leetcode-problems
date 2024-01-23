var minimizedStringLength = function(s) {
    let count = {};
    for (let i of s) {
        count[i] ? count[i]++ : count[i] = 1;
    }
    let counter = 0;
    for (let i of Object.keys(count)) {
        counter++;
    }
    return counter;
};