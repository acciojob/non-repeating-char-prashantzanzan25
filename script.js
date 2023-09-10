function firstNonRepeatedChar(str) {
  // Create an object to store character counts
  const charCount = {};

  // Iterate through the string to count each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
  alert(result);
} else {
  alert("null");
}
