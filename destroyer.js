function destroyer(arr) {
    // Remove all the values
    var argumentsArray = Array.prototype.slice.call(arguments);
    for (let i=1; i<argumentsArray.length; i++) {
      for (let j=0; j<arr.length; j++) {
          if (arr[j] === argumentsArray[i]) {
              delete(arr[j]);
          }
      }
    }
    return arr.filter(Boolean);
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));