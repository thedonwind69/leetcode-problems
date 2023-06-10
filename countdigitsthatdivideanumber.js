// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

var countDigits = function(num) {
  let count = 0;
  const digits = String(num).split('');

  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    
    if (digit !== 0 && num % digit === 0) {
      count++;
    }
  }

  return count;
};

console.log(countDigits(1223))