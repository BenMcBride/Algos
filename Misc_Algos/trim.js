/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
  var newStr = ''
  var count = 0
  var endCount = 0
  for(var i = 0; i < str.length; i++){
    if(str[i] == ' ') {
      count++
    } else {
      break
    }
  }
  for(var i = str.length - 1; i > count; i--){
    if(str[i] == ' ') {
      endCount++
    } else {
      break
    }
  }
  for(var i = count; i < str.length - endCount; i++){
    newStr += str[i]
  }
  return newStr
}
console.log(trim(str1));
