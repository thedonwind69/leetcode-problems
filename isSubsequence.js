var sortedOrNot = (array) => {
  
    for (let i = 0; i< array.length; i++) {
        if (array[i+1] < array[i]) {
            return false;
        }
    }
    
    return true;
    
};

var includesAll = (array1, array2) => {
  for (let i = 0; i < array1.length; i++ ) {
      if (!array2.includes(array1[i])) {
          return false
      }
  }

    return true;
};

var isSubsequence = function(s, t) {
    
    var sstring = s.split('');
    var tstring = t.split('');
    
    var array = [];
    
    for (let i = 0; i< sstring.length; i++) {
        for (let j=0; j< tstring.length; j++) {
            if (sstring[i] === tstring[j]) {
                array.push(j);
            }
                
        }
                   
    }
    
    if ( (includesAll(sstring, tstring)) && ( sortedOrNot(array)  )  ) {
        return true;
    } else {
        return false;
    }
    
};

var s = "abc", t = "ahbgdc";
var s = "axc", t = "ahbgdc";
console.log(isSubsequence(s, t));