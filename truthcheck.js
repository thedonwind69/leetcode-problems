function truthCheck(collection, pre) {
    // Is everyone being true?
    for (let i = 0; i<collection.length; i++) {
      var current = collection[i];
      if (!current[pre]) {
        return false;
      }
    }
    return true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");