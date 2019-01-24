var repeatedNTimes = function(A) {
    var hash = {};
    for (let i=0; i<A.length; i++) {
        var number = A[i];
        if (hash[number]) {
            return number;
        } else {
            hash[number] = 1;
        }
    }
};
   