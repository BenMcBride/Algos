// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  }
  var midex = Math.floor(arr.length / 2)
  return mergeSortedArrays(mergeSort(arr.slice(0, midex)), mergeSort(arr.slice(midex)))
}

function mergeSortedArrays(left, right) {
  let sortedArr = []
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0]
      ? sortedArr.push(left.shift())
      : sortedArr.push(right.shift())
  }
  return sortedArr.concat(left).concat(right)
}

console.log(mergeSort(testArr));