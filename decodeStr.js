/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";
/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  newStr = '' 
  temp = 0 // variable that will be the value the numbers following the current letter
  for(var i = 0; i < str.length; i++){
    j = i // setting j = i so we can change j for the while loop without changing i
    while(isNaN(str[j+1]) == false){ // while the next value is a number
      if(temp > 0){ // if there's more than one number in a row
        temp = 10*temp // multiply it by 10 to so we can add the next number
      } 
      temp += parseInt(str[j+1]) // add the number
      j++ // increment j so we can look at the next value in the string
    }
    // if the next value is a number, and the current number isn't a number (we don't want to print numbers)
    if (isNaN(str[i+1]) == false && isNaN(str[i]) == true){ 
      newStr += str[i].repeat(temp)// repeat the character temp number of times
    }
    temp = 0 // reset temp
  }
  return newStr
}
console.log(decodeStr(str2));
