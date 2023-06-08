// 2535. Difference Between Element Sum and Digit Sum of an Array
// Easy
// 442
// 11
// Companies
// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

var differenceOfSum = function(nums) {

    let elementSum = 0;
    for (let i in nums) {
      elementSum += nums[i];
    }  
  
    var arrayOfDigits = [];
    for (let i in nums) {
      let currentNum = nums[i];
      for (let j in String(currentNum).split('')) {
        let currentDigit = parseInt(String(currentNum).split('')[j])
        arrayOfDigits.push(currentDigit);
      }
    }
  
    let digitSum = 0;
    for (let i in arrayOfDigits) {
      digitSum += arrayOfDigits[i];
    }
  
    return elementSum - digitSum;
  
  
  };