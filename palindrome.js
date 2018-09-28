
const is_palindrome = (string) => {

    var stringArray = string.split("");
    var startIndex = 0;
    var endIndex = stringArray.length - 1;

    while (startIndex < endIndex) {

        if (stringArray[startIndex] !== stringArray[endIndex]) {
            return false;
        } else {
            startIndex++;
            endIndex--;
        }

    }
    return true;
};

console.log(is_palindrome("fuckkcuf"));