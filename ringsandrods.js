// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.

var countPoints = function(rings) {
    var objTracker = {};
    var ringsArray = rings.split('');
    for (let i = 0; i<ringsArray.length-1; i = i+2) {
        if ( !objTracker[ringsArray[i+1]]  ) {
            objTracker[ringsArray[i+1]] = [];
            objTracker[ringsArray[i+1]].push(ringsArray[i])
        } else {
            objTracker[ringsArray[i+1]].push(ringsArray[i])
        }
    }
    
    const objKeys = Object.keys(objTracker);
    var count = 0;
    for (let i in objKeys) {
        let currentKey = objKeys[i];
        if (objTracker[currentKey].includes("B") && objTracker[currentKey].includes("G") && objTracker[currentKey].includes("R") ) {
            count++;
        }
    }

    return count;

};

const result = countPoints("B0B6G0R6R0R6G9")
console.log(result)