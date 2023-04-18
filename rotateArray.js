/*
  Rotate Array
  Implement rotateArr(arr, offset) that accepts
  an array arr and an integer offset . Shift
  values of arr to the right by offset amount.
  ‘Wrap-around’ any values that shift off the
  end of the array to the other side, so that
  no data is lost.

  Example: rotateArr([1, 2, 3], 1), should return
  [3, 1, 2].
  
  Operate in-place (do not create a new array).

  Bonus: allow a negative offset (shift left, not
  right).
*/

function rotateArr(arr, offset) {
  console.log("original array: " + arr);
  // if offset is negative, rotate left 'offset' number of times
  while (offset < 0) {
    for (var i = 0; i < arr.length; i++) {
      // set or reset value of var first
      var first = arr[0];
      // all but first value of array is swapped with the value to it's right
      if (i < arr.length - 1) {
        var next = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = next;
      }
      // first value of array is replaced with the original last
      else {
        arr[0] = first;
      }
    }
    offset++;
  }
  // if offset is positive, rotate right 'offset' number of times
  while (offset > 0) {
    for (var i = arr.length - 1; i > 0; i--) {
      // set or reset value of var last
      var last = arr[arr.length - 2];
      // all but last value of array is swapped with value to it's left
      if (i > 0) {
        var next = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = next;
      }
      // last value of array is replaced with the original first
      else {
        arr[arr.length - 1] = last;
      }
    }
    offset--;
  }
  console.log(arr);
}
rotateArr([1, 2, 3, 4, 5, 6], -5);

// devin's solution

// function rotateArr(arr, offset) {
//   while (offset <= 0) {
//     offset = offset + arr.length;
//   }
//   var j = 0;
//   while (j < offset) {
//     var temp = arr[0];
//     for (i = arr.length - 1; i >= 0; i--) {
//       if (i == arr.length - 1) {
//         arr[0] = arr[i];
//       } else if (i == 0) {
//         arr[1] = temp;
//       } else {
//         arr[i + 1] = arr[i];
//       }
//     }
//     j++;
//   }
//   return arr;
// }
// console.log(rotateArr([1, 2, 3, 4, 5, 6], (-2)));

//tim's solution
// function rotateArr(arr, offset) {
//   console.log("Original array: " + arr);

//   //makes sure this loop does not run longer than it already is going to
//   var trueOffset = Math.abs(offset % arr.length);

//   if (offset < 0) { // Reverses the ordering if the offset is negative
//     for (var i = 0; i < trueOffset; i++) {
//       for (var j = arr.length - 1; j >= 0; j--) {
//         var temp = arr[arr.length - 1];
//         arr[arr.length - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   } else {
//     //These nested for loops reorder the array trueOffset times, leaving whatever was at the end, at the front
//     for (var i = 0; i < trueOffset; i++) {
//       for (var j = 1; j < arr.length; j++) {
//         var temp = arr[0];
//         arr[0] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   console.log("Rotated array: " + arr);
// }

// rotateArr([1, 2, 3, 4, 5, 6], -4);
