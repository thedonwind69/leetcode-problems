function mutation(arr) {
    var firstStr = arr[0].toLowerCase().split("");
    var secondStr = arr[1].toLowerCase().split("");
    for (let i = 0; i<secondStr.length; i++) {
      if (!firstStr.includes(secondStr[i])) {
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);