/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
  arr = [];
  for (i in str) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      arr.push(str[i]);
    } else if (str[i] == ")") {
      if (arr[arr.length - 1] == "(") {
        arr.pop();
      } else {
        return false;
      }
    } else if (str[i] == "]") {
      if (arr[arr.length - 1] == "[") {
        arr.pop();
      } else {
        return false;
      }
    } else if (str[i] == "}") {
      if (arr[arr.length - 1] == "{") {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(bracesValid(str3));
