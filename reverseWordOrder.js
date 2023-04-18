/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

function reverseWords(str) {
  let newString = str.split(' ');
  let returnString = '';
  for (word in newString) {
    let tempWord = '';
    for (let i = newString[word].length - 1; i >= 0; i--) {
      tempWord += newString[word][i];
    }
    if (returnString != ''){
      returnString += ' ';
    }
    returnString += tempWord;
  }
  return returnString;
}
/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */

function reverseWordOrder(wordsStr) {
  var string = ''
  for(var i = wordsStr.length - 1; i >= 0; i--){
    if (wordsStr[i] != ' ' || wordsStr[i-1] != ' '){
      string += wordsStr[i]
    }
  }
  string = reverseWords(string)
  return string
}
console.log(reverseWordOrder(str1));