function caesarCipher(inputString, shift) {
    // Initialize an empty string to store the result
    let result = "";
  
    // Loop through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
      // Get the current character
      let char = inputString[i];
  
      // Check if the character is a letter (A-Z or a-z)
      if (/[A-Za-z]/.test(char)) {
        // Determine whether the character is uppercase or lowercase
        const isUpperCase = char === char.toUpperCase();
  
        // Convert the character to its ASCII code
        const charCode = char.charCodeAt(0);
  
        // Shift the character code by the specified amount
        const shiftedCharCode = charCode + shift;
  
        // Wrap around the alphabet if necessary (for both uppercase and lowercase)
        if (isUpperCase) {
          if (shiftedCharCode > 90) {
            char = String.fromCharCode(shiftedCharCode - 26);
          } else if (shiftedCharCode < 65) {
            char = String.fromCharCode(shiftedCharCode + 26);
          } else {
            char = String.fromCharCode(shiftedCharCode);
          }
        } else {
          if (shiftedCharCode > 122) {
            char = String.fromCharCode(shiftedCharCode - 26);
          } else if (shiftedCharCode < 97) {
            char = String.fromCharCode(shiftedCharCode + 26);
          } else {
            char = String.fromCharCode(shiftedCharCode);
          }
        }
      }
  
      // Add the character to the result string
      result += char;
    }
  
    return result;
  }
  
  // Example usage:
  const originalText = "Hello, World!";
  const shiftedText = caesarCipher(originalText, 3); // Shift by 3 positions
  console.log(shiftedText); // Output: "Khoor, Zruog!"
  