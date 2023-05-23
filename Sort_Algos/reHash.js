/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
  const charCount = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];
    if (isNaN(char) && !isNaN(nextChar)) {
      let count = 0;
      let j = i + 1;
      while (!isNaN(str[j])) {
        count *= 10;
        count += parseInt(str[j]);
        j++;
      }
      if (charCount.hasOwnProperty(char)) {
        charCount[char] += count;
      } else {
        charCount[char] = count;
      }
      i = j - 1;
    }
  }
  const sortedChars = Object.keys(charCount).sort();
  for (const char of sortedChars) {
    result += char + charCount[char];
  }
  return result;
}

console.log(rehash(str1));
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");
