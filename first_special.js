const first_special = (array) => {

    var count = {};
    for (let i = 0; i<array.length; i++) {
        var current = array[i];
        if (count[current.toString()]) {
            count[current.toString()] += 1;
        } else {
            count[current.toString()] = 1;
        }
    }

    for (let j = 0; j < array.length; j++) {
        if (count[array[j]] === 1) {
            return array[j];
        }
    }
    return "There is no special character, bitch.";
}

var result = first_special([2, 2, 3, 4, 5, 6, 33, 6, 9, 3, 4, 5])
console.log(result);