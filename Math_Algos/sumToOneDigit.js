// Implement a function ​sumToOne(num)​ that,
// given a number, sums that number’s digits
// repeatedly until the sum is only one digit. Return
// that final one digit result.
function sumToOneDigit(num) {
  if (num < 0) {
    num = num * -1;
  }
  var digits = [];
  var string = num.toString();
  var sum = 10;
  while (sum > 9) {
    digits = [];
    string = num.toString();
    sum = 0;
    for (var i = 0; i < string.length; i++) {
      digits.push(+string.charAt(i));
    }
    for (var y = 0; y < digits.length; y++) {
      sum += digits[y];
    }
    num = sum;
  }
  console.log(sum);
}
sumToOneDigit(19636);