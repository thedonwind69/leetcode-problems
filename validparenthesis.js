
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    
    var array = s.split("");
    if (array.length === 1) {return false}
    var stack = [];
  
    if (array.length % 2 == 1) {
      return false;
    }
  
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
  
  
    for (let i = 0; i<array.length; i++) {
      let currentLetter = array[i];
      if (currentLetter === "(") {
        stack.push(currentLetter)
      } else if (currentLetter === ")") {
        if (stack[stack.length-1] === "(") {
          stack.pop();
        } else {
          return false;
        }
      }
      
      if (currentLetter === "[") {
        stack.push(currentLetter)
      } else if (currentLetter === "]") {
        if (stack[stack.length-1] === "[") {
          stack.pop();
        } else {
          return false;
        }
      }
  
      if (currentLetter === "{") {
        stack.push(currentLetter);
      } else if (currentLetter === "}") {
        if (stack[stack.length-1] === "{") {
          stack.pop();
        } else {
          return false;
        }
      }
  
    }
  
    return true;
  };



//   passes 92/93 test cases...