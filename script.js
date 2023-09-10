function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
  alert(result);
} else {
  alert("null");
}
const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
  alert(result);
} else {
  alert("null");
}