// Could we determine if a certain value was present? Write a function called 
// isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

function isPresent2d(arr2d, value) {
  // i is looking at the index of each sub array in arr2d
  for (var i = 0; i < arr2d.length; i++) {
    // y is looking at the index of each value in the sub arrays of arr2d
    for (var y = 0; y < arr2d[i].length; y++) {
      // if the value is any of the values in the sub arrays,
      if (arr2d[i][y] == value) {
        // return true
        console.log(true);
        return true;
      }
    }
  }
  // log and return the boolean
  console.log(false);
  return false;
}
isPresent2d(
  [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
  ],
  7
);
