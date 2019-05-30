const firstRecurring = (array) => {
    var count = {};
    for (let i = 0; i<array.length; i++) {
        var currentLetter = array[i];
        if (count[currentLetter]) {
            return currentLetter;
        } else {
            count[currentLetter] = 1;
        }
    }
};

var array = ["a", "b", "f", "d", "z", "b", "c", "a", "k"];
var result = firstRecurring(array);
console.log(result);