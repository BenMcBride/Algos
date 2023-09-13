// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str.length <= 0) {
    return false;
  }
  let newStr = "#";
  for (i = 0; i < str.length; i++) {
    // if it's at start of string, capitalize and push first letter unless it's a space
    if (i == 0 && str[i] != " ") {
      newStr += str[i].toUpperCase();
      continue;
    }
    // if there's 2 spaces in a row, skip them
    else if (str[i - 1] == " " && str[i] == " ") {
      continue;
    }
    // if there's a space followed by a letter, capitalized the letter and add it to the string
    else if (str[i - 1] == " " && str[i] != " ") {
      let ltr = str[i].toUpperCase();
      newStr += ltr;
    }
    // if there's a
    else if (str[i] != " ") {
      newStr += str[i];
      continue;
    }
  }
  if (newStr.length <= 1 || newStr.length > 140) {
    return false;
  }
  return newStr;
}
console.log(generateHashtag(""));
console.log(generateHashtag(" "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars is nice"));
