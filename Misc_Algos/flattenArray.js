// Given a 2 dimensional array (an array containing arrays), return a new array containing
// just the values from inside the sub-arrays. Don't assume the array will always be the same
// size, or that the sub-arrays are all the same length (the array might be jagged). Don't
// use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or
// .pop() where needed.

function flatten(arr2d) {
  // declare an empty flat array
  var flat = [];
  // i is looking at the index of each sub array in arr2d
  for (var i = 0; i < arr2d.length; i++) {
    // y is looking at the index of each value in the sub arrays of arr2d
    for (var y = 0; y < arr2d[i].length; y++) {
      // push each value in each array to the flat array
      flat.push(arr2d[i][y]);
    }
  }
  // log and return the new flat array
  console.log(flat);
  return flat;
}
flatten([
  [2, 5, 8, 3, 12, 45, 1],
  [3, 6, 1],
  [5, 7, 4, 2, 7],
]);
