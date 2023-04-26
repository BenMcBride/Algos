/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
// //Built-in
// function reverseStr(str) {
//   if (str == "") {
//     return "";
//   }
//   var strArr = str.split("").reverse().join("");
//   return strArr;
// }
// console.log(reverseStr(str1));

//Recursive
function reverseStr(str) {
  if (str == '') {
    return '';
  } else {
    return str.slice(-1) + reverseStr(str.slice(0, -1));
  }
}
console.log(reverseStr(str2));
