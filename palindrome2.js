const palindrome = (string) => {
    var start = 0;
    var regEx = /[\W_]/g; 
    var stringArray = string.toLowerCase().replace(regEx, "").split("");
    var end = stringArray.length - 1;
    for (start = 0; start <= end; start++) {
        if (stringArray[start] !== stringArray[end]) {
            return false;
        } else {
            end--;
        }
    }
    return true;
};

console.log(palindrome("race car"));
console.log(palindrome('0_0 (: /-\ :) 0–0'))
console.log(palindrome('sass'));

