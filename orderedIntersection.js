/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

//             a
const arrA1 = [0, 1, 2, 2, 2, 7];
//             b
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(arr1, arr2) {
  let i = 0
  let j = 0
  let newArr = []
  while(i < arr1.length || j < arr2.length){
    if (newArr[newArr.length - 1] == arr1[i]) {// if the last value in newArr is the current value of arr1[i], increment i
      i++
    }
    if (newArr[newArr.length - 1] == arr2[j]) {// if the last value in newArr is the current value of arr2[j], increment j
      j++
    } else if (arr2[j] == arr1[i]) {// if the current values of each array are the same, push the value and increment both
      newArr.push(arr2[j])
      j++
      i++
    } else if (arr1[i] < arr2[j]) {// else, increment the lower value of the two arrays
      i++
    } else if (arr2[j] < arr1[i]) {
      j++
    }
    else {// if a value is undefined, then no more duplicates
      break
    }
  }return newArr
}

console.log(orderedIntersection(arrA3, arrB3))