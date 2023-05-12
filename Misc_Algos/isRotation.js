/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
  if(s1.length == s2.length){
    arr = s1.split("")
    var times = arr.length
    while (times > 0) {
      for (var i = 0; i < arr.length; i++) {
        var first = arr[0];
        if (i < arr.length - 1) {
          var next = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = next;
        }
        else {
          arr[0] = first;
        }
      }
      str1 = arr.join("")
      if (str1 == s2) {
        return true
      }
      else{
        times--
        continue
      }
    }
    return false
  } else{
  return false
  }
}
console.log(isRotation(strA3,strB3));

function checkRotationStrings(string, rotated) {
  return string.length === rotated.length && rotated.repeat(2).includes(string);
}
console.log(checkRotationStrings(strA1,strB1));