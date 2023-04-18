/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "a(b))(a(b)"

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
  var arr = []
  for(var i = 0; i < str.length; i++){
    arr.push(str[i])
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == '('){
      for(var j = i; j < arr.length; j++){
        if (arr[j] == ')'){
          arr.splice(j, 1)
          arr.splice(i, 1)
          break
        }
      }
    }
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == '(' || arr[i] == ')'){
      return false
    }
  }
  return true
}
console.log(parensValid(str5));


// var countOpen = 0
// var countClose = 0
// var endingBracket = ''
// for(var i = 0; i < str.length; i++){
//   if (str[i] == '('){
//     countOpen++
//     endingBracket = str[i]
//   }
//   if (str[i] == ')'){
//     countClose++
//     endingBracket = str[i]
//   }
// }
// if (countOpen != countClose) {
//   return false
// } else {
//   if (endingBracket == '('){
//     return false
//   } else {
//     return true
//   }
// }