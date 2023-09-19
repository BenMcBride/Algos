function firstNonRepeatingLetter(s) {
  if (s.length < 1) {
    return "";
  }
  let arr = [];
  for (var j = 0; j < s.length; j++) {
    for (var i = j + 1; i < s.length; i++) {
      if (s[j].toLowerCase() === s[i].toLowerCase() && !arr.includes(s[j])) {
        arr.push(s[j]);
        break;
      }
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      return s[i];
    }
  }
  return "";
}
console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));
console.log(firstNonRepeatingLetter("mmmmmmmmmm"));
console.log(firstNonRepeatingLetter("mmmmmmnnn"));
