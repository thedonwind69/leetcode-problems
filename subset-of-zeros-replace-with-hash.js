// saw on justin lawrence youtube video

// seems like easy/medium problem,
// used one hint from video


// given a string of zeros and ones - '00100010100101' swith the longest subset of zeros with #'
// should be 001###10100101


const subsetOfZeros = (str) => {

    let strArray = str.split("");

    let longestCount = 0;
    let currentCount = 0;
    let startingIndexOfLongestCount = 0;

    for (let i = 0; i<strArray.length; i++) {
        let currentNum = strArray[i];

        if (currentNum === "0") {
            currentCount++;
            if (currentCount > longestCount) {
                longestCount = currentCount;
                startingIndexOfLongestCount = i - currentCount + 1;
            }
        } else {
            currentCount = 0;
        }
    }

    for (let i = startingIndexOfLongestCount; i < startingIndexOfLongestCount+longestCount; i++) {
        strArray[i] = "#";
    }
    return strArray.join("");
}



const answer = subsetOfZeros('00100010100101');
console.log(answer)
// should be 001###10100101
