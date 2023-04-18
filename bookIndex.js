/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  var result = "";
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1] && result[result.length - 1] != "-") {
      result += nums[i];
      result += "-";
    } else if (nums[i] + 1 == nums[i + 1] && result[result.length - 1] == "-") {
      continue;
    } else {
      result += nums[i];
      if (i < nums.length - 1) {
        result += ", ";
      }
    }
  }
  return result;
}
console.log(bookIndex(nums1));
