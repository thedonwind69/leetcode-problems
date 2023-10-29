function generateUnsortedArrayWithMissingNumber() {
    const arraySize = 100;
    const missingNumber = Math.floor(Math.random() * arraySize) + 1;
    const fullArray = Array.from({ length: arraySize }, (_, index) => index + 1);
    const unsortedArray = fullArray.filter((number) => number !== missingNumber);
    // shuffle
    for (let i = unsortedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unsortedArray[i], unsortedArray[j]] = [unsortedArray[j], unsortedArray[i]];
    }
    return unsortedArray;
}

function missingFrom100 (array, size) {
    let count = {};
    for (let i = 1; i <= size; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        count[array[i]] = 1;
    }
    for (let i = 0; i < Object.keys(count).length; i++) {
        let currentKey = Object.keys(count)[i]
        if (count[currentKey] == 0) {
            return currentKey;
        }
    }
}

const unsortedArrayWithMissingNumber = generateUnsortedArrayWithMissingNumber();
const result = missingFrom100(unsortedArrayWithMissingNumber, 100)
console.log(result);