var uncommonFromSentences = function(A, B) {
    var Astring = A.split(" ");
    var Bstring = B.split(" ");
    var completeString = Astring.concat(Bstring);
    var count = {};
    
    for (let i = 0; i<completeString.length; i++) {
        var word = completeString[i];
        if (count[word]) {
            count[word] += 1;
        } else {
            count[word] = 1;
        }
    };

    var finalArray = [];

    for (let j = 0; j<Object.keys(count).length; j++) {
        var key = Object.keys(count)[j];
        if (count[key] === 1) {
            finalArray.push(key);
        } 
    }

    return finalArray;
   
};

var A = "s z z z s"
var B = "s z ejt";
console.log(uncommonFromSentences(A, B));

//good