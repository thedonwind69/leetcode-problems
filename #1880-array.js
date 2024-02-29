var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstnum = "";
    let secondnum = "";
    
    // Construct the numerical values of firstWord and secondWord
    for (let char of firstWord) {
        firstnum += char.charCodeAt(0) - 97;
    }
    for (let char of secondWord) {
        secondnum += char.charCodeAt(0) - 97;
    }
    
    // Convert the constructed numerical values to integers
    firstnum = parseInt(firstnum);
    secondnum = parseInt(secondnum);
    
    // Calculate the sum of the numerical values of firstWord and secondWord
    let sum = firstnum + secondnum;
    
    // Convert the targetWord to its numerical value
    let targetValue = 0;
    for (let char of targetWord) {
        targetValue = targetValue * 10 + char.charCodeAt(0) - 97;
    }
    
    // Compare the sum with the numerical value of targetWord
    return sum === targetValue;
};
