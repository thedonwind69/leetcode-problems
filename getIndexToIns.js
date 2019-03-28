function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var array = arr.sort(function (a,b) {return a-b});
    for (let i=0; i<array.length; i++) {
      var currentNum = array[i];
      if (currentNum >= num) {
        return i;
      }
    }
    return array.length;
  }
  
  getIndexToIns([40, 60], 50);