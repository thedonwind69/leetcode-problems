function bubbleSort(array) {
    // change code below this line
    var length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length-1-i; j++) {
        if (array[j] > array[j+1]) {
            var temp = array[j]
            array[j] = array[j+1];
            array[j+1] = temp;
        } 
      }
    }
    return array;
  }

var result = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(result);
