// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence
// in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of
// the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a
// valid sublist / subarray.

var maxSequence = function (arr) {
  // a max sum variable to keep track of the highest sum thus far
  let maxSum = 0;
  // start with i = 0 and then increase i with each loop to start later in the array
  let start = arr.length;
  // run the for loop inside while incrementing i's starting point up one with each loop
  while (start >= 0) {
    // start sum at 0 each time we start a new for loop
    let sum = 0;
    // for loop that starts at i=0 and increments i with each subsequent loop
    for (var i = arr.length - start; i < arr.length; i++) {
      // add each number to sum
      sum += arr[i];
      // then compare sum to the current max sum we've found
      if (sum > maxSum) {
        // if sum is higher, update maxSum to be the new maxSum
        maxSum = sum;
      }
    }
    // decrement start for while loop and i's starting point
    start--;
  }
  // return the highest sum we found in the loops
  return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
