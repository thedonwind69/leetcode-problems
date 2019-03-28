function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    var beg2ndArray = arr2.slice(0, n);
    for (let i=0;i<arr1.length; i++) {
      beg2ndArray.push(arr1[i]);
    }
    var leftover = arr2.slice(n, arr2.length);
    return beg2ndArray.concat(leftover);
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);