/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
  amnt = amnt % str.length
  arr = str.split("")
  while (amnt < 0) {
    for (var i = 0; i < arr.length; i++) {
      var first = arr[0];
      if (i < arr.length - 1) {
        var next = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = next;
      }
      else {
        arr[0] = first;
      }
    }
    amnt++;
  }
  while (amnt > 0) {
    for (var i = arr.length - 1; i > 0; i--) {
      var last = arr[arr.length - 2];
      if (i > 0) {
        var next = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = next;
      }
      else {
        arr[arr.length - 1] = last;
      }
    }
    amnt--;
  }
  string = arr.join("")
  return string
}
console.log(rotateStr(str, 520 ));