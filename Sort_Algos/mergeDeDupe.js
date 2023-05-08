// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

// 1. DRIVER
// 2. PRESENTER
// 3. NAVIGATOR
function mergeDedupe(arr1, arr2) {
  let i = 0
  let j = 0
  let newArr = []
  while(i < arr1.length || j < arr2.length){// while either loop is within their arrays length
    if (newArr[newArr.length - 1] == arr1[i]) {// if the last value in newArr is the same value we just pushed
      i++
    }
    if (newArr[newArr.length - 1] == arr2[j]) {// if the last value in newArr is the same value we just pushed
      j++
    }
    else if (arr2[j] < arr1[i] || arr1[i] == undefined) {// if the current arr2 value is less, push it and j++
      newArr.push(arr2[j])
      j++
    } 
    else if( arr1[i] < arr2[j] || arr2[j] == undefined) {// if the current arr1 value is less, push it and i++
      newArr.push(arr1[i])
      i++
    } else {// else, arr1[i] and arr2[j] are equal, so push one, so and increment both
      newArr.push(arr1[i])
      i++
      j++
    }
  }
  return newArr
}

console.log(mergeDedupe(arr1, arr2));
console.log(mergeDedupe(arrA, arrB));