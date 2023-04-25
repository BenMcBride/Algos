/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */

function sumArr(nums, sum = 0) {
  if (nums.length === 0) {
    return sum
  }
  sum += nums[nums.length - 1]
  nums.pop()
  return sumArr(nums, sum)
}

console.log(sumArr(nums3));