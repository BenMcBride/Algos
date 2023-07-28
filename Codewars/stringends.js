function solution(str, ending) {
  var endOfStr = "";
  for (var i = ending.length; i > 0; i--) {
    endOfStr += str[str.length - i];
  }
  if (endOfStr == ending) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("abcde", "cde"));
