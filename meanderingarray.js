// #1
// Given a sorted array of integers, 
// rearrange the array alternately 
// i.e first element should be maximum value, 
// second minimum value, third second max, 
// fourth second min and so on. 
 
 
function meanderingArray(unsorted) {
    var finalArray = [];
    var sortedArray = unsorted.sort((a, b) => {return a - b});
    var largest = true;
    while (unsorted.length > 0) {
        if (largest) {
            finalArray.push(sortedArray.pop());
            largest = false;
        } else {
            finalArray.push(sortedArray.shift());
            largest = true;
        }
    }
    return finalArray;
}
 
var testArray = [5, 2, 7, 8, -2, 25, 25];
var Expected = [25, -2, 25, 2 , 8, 5, 7];

console.log(meanderingArray(testArray))
console.log(Expected);
