function sumPrimes(num) {
    var sum = 0;
    for (let i = 1; i<=num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  function isPrime (num) {
    if (num <= 1) {
      return false;
    } else if (num === 2) {
      return true;
    }
  
    for (let i = 2; i<num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  sumPrimes(10);