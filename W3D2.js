/**
 * Given an array and an additional value, inserts the
 * value at the beginning of the array. Do this in-place,
 * without using any built-in array methods.
 * 
 * @param {Array} nums - The given array.
 * @param {Number} val - The value to be inserted.
 * @returns {Array} The mutated array.
 */
function pushFront(nums, val) {
  nums[nums.length] = val;
  for(var i = nums.length - 1; i > 0; i--){
    var temp = nums[i - 1];
    nums[i - 1] = nums[i];
    nums[i] = temp;
  }
  console.log(nums);
  return nums;
}


const nums1 = [20, 25, 30, 28, 7];
const val1 = 8;
const expected1 = [8, 20, 25, 30, 28, 7];
pushFront([20, 25, 30, 28, 7], 8)

/**
 * Given an array, index, and additional value, insert
 * the value into the array at the given index. Do this
 * in-place, without using built-in array methods. You
 * can think of pushFront(arr, val) as equivalent to
 * insertAt(arr, 0, val).
 * 
 * @param {Array} nums - The given array.
 * @param {Number} idx - The index at which to insert the value.
 * @param {Number} val - The given value to be inserted.
 * @returns {Array} The mutated array.
 */
function insertAt(nums, idx, val) {
  nums[nums.length] = val;
  for(var i = nums.length - 1; i > idx; i--){
    var temp = nums[i - 1];
    nums[i - 1] = nums[i];
    nums[i] = temp;
  }
  console.log(nums);
}

const nums2 = [5, 11, 29, 6, 27];
const idx2 = 3;
const val2 = 18;
const expected2 = [5, 11, 29, 18, 6, 27]
insertAt([5, 11, 29, 6, 27], 3, 18)

/**
 * Given an array, remove and return the value at
 * the beginning of the array. Do this in-place
 * without using any built-in array methods except
 * pop().
 * 
 * @param {Array} nums - The given array.
 * @returns {Number} - The removed value.
 */
function popFront(nums) {
  for(var i = 0; i < nums.length - 1; i++){
    var temp = nums[i + 1];
    nums[i + 1] = nums[i];
    nums[i] = temp;
  }
  var popped = nums.pop();
  console.log(popped);
  return popped;
}

const arr3 = [25, 16, 5, 21, 7];
const expected3 = 25;
popFront([25, 16, 5, 21, 7])
/**
 * Given an array and an index into the array,
 * remove and return the array value at that index.
 * Do this without using any built-in array methods
 * except pop(). Think of popFront(arr) as
 * equivalent to removeAt(arr, 0).
 * 
 * @param {Array} nums - The given array.
 * @param {Number} idx - The index at which to remove the value.
 * @returns {Number} The removed value.
 */
function removeAt(nums, idx) {
  for(var i = idx; i < nums.length - 1; i++){
    var temp = nums[i + 1];
    nums[i + 1] = nums[i];
    nums[i] = temp;
  }
  var popped = nums.pop();
  console.log(popped);
  return popped;
}

const arr4 = [5, 21, 2, 30, 8];
const idx4 = 1;
const expected4 = 21;
removeAt([5, 21, 2, 30, 8], 1);