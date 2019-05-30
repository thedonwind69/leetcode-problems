function firstUniqueElement (array) {
    var count = {};
    for (let i = 0; i<array.length; i++) {
        var currentElement = array[i];
        if (count[currentElement]) {
            count[currentElement] += 1;
        } else {
            count[currentElement] = 1;
        }
    }
    for (let j = 0; j< Object.keys(count).length; j++) {
        var currentKey = Object.keys(count)[j];
        if (count[currentKey] === 1) {
            return currentKey;
        }
    }
};

var array = ["a", "b", "f", "d", "z", "b", "c", "a", "k"];
var result = firstUniqueElement(array);
console.log(result);