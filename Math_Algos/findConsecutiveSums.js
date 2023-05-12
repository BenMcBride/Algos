/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16;
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];

output = [
  [2, 5, 3, 6],
  [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return here:

function findConsecutiveSums(arr, target) {
  const resultsArray = [];
  let sum = 0;
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    // here we are setting sum to be the initial val
    while (sum > target) {
    //while the sum is greater than the target
      sum -= arr[idx];
      idx++;
      //sum is being shifted forward from index val of last iteration
    }
    if (sum == target) {
      //if the sum is equal to the target (k)
      resultsArray.push(arr.slice(idx, i + 1));
      //we will push the array from the current index to where we currently are cheking in the loop
      let j = i + 1;
      //declaring J as index + 1 to check other index values
      while (arr[j] == 0 && j < arr.length) {
        resultsArray.push(arr.slice(idx, j + 1));
        j++;
      }
      sum -= arr[idx];
      idx++;
    }
  }
  return resultsArray;
}

console.log(findConsecutiveSums(arr, k));