// Write a method that takes an array of consecutive (increasing) letters as input and that
// returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
function findMissingLetter(arr) {
  let str = arr.join("").toString();
  let code = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) != code + 1) {
      return String.fromCharCode(code + 1);
    }
    code++;
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
