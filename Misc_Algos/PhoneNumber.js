function createPhoneNumber(numbers) {
  var str = "(";
  for (var i = 0; i < numbers.length; i++) {
    str = str.concat(numbers[i]);
    if (i == 2) {
      str = str.concat(") ");
    } else if (i == 5) {
      str = str.concat("-");
    }
  }
  return str;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
