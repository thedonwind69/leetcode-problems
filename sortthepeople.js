
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.



var sortPeople = function(names, heights) {
    var arrayOfPeople = [];
    for (let i in names) {
        arrayOfPeople.push({name: names[i], height: heights[i]})
    }
    var sorted = arrayOfPeople.sort((personA, personB) => personB.height - personA.height)
    var finalArray = []
    for (let i in sorted) {
        finalArray.push(sorted[i].name)
    }
    return finalArray;
};